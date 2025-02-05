package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

type Skill struct {
	SkillName   string `json:"skillName"`
	Image       string `json:"image"`
	Description string `json:"description"`
}

type Project struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Image       string `json:"image"`
	LiveLink    string `json:"liveLink"`
	RepoLink    string `json:"repoLink"`
}

var skills []Skill
var projects []Project

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello from Golang backend!")
	})

	r.HandleFunc("/api/skills", getSkills).Methods("GET")
	r.HandleFunc("/api/skills", createSkill).Methods("POST")
	r.HandleFunc("/api/skills/{id}", updateSkill).Methods("PUT")
	r.HandleFunc("/api/skills/{id}", deleteSkill).Methods("DELETE")

	r.HandleFunc("/api/projects", getProjects).Methods("GET")
	r.HandleFunc("/api/projects", createProject).Methods("POST")
	r.HandleFunc("/api/projects/{id}", updateProject).Methods("PUT")
	r.HandleFunc("/api/projects/{id}", deleteProject).Methods("DELETE")

	r.PathPrefix("/").Handler(http.FileServer(http.Dir("../frontend/build")))

	// Enable CORS
	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	originsOk := handlers.AllowedOrigins([]string{"http://localhost:3000"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "OPTIONS"})

	fmt.Println("Server is running on http://localhost:8080")
	http.ListenAndServe(":8080", handlers.CORS(headersOk, originsOk, methodsOk)(r))
}

func getSkills(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(skills)
}

func createSkill(w http.ResponseWriter, r *http.Request) {
	var skill Skill
	err := json.NewDecoder(r.Body).Decode(&skill)
	if err != nil {
		http.Error(w, fmt.Sprintf("Error decoding request body: %v", err), http.StatusBadRequest)
		return
	}

	if skill.SkillName == "" {
		http.Error(w, "Skill name is required", http.StatusBadRequest)
		return
	}

	skills = append(skills, skill)
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(skill)
}

func updateSkill(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id, err := strconv.Atoi(params["id"])
	if err != nil || id < 0 || id >= len(skills) {
		http.Error(w, "Invalid ID", http.StatusBadRequest)
		return
	}

	var updatedSkill Skill
	json.NewDecoder(r.Body).Decode(&updatedSkill)
	if updatedSkill.SkillName == "" {
		http.Error(w, "Skill name is required", http.StatusBadRequest)
		return
	}
	skills[id] = updatedSkill
	json.NewEncoder(w).Encode(updatedSkill)
}

func deleteSkill(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id, err := strconv.Atoi(params["id"])
	if err != nil || id < 0 || id >= len(skills) {
		http.Error(w, "Invalid ID", http.StatusBadRequest)
		return
	}

	skills = append(skills[:id], skills[id+1:]...)
	w.WriteHeader(http.StatusNoContent)
}

func getProjects(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(projects)
}

func createProject(w http.ResponseWriter, r *http.Request) {
	var project Project
	err := json.NewDecoder(r.Body).Decode(&project)
	if err != nil {
		http.Error(w, fmt.Sprintf("Error decoding request body: %v", err), http.StatusBadRequest)
		return
	}

	if project.Title == "" {
		http.Error(w, "Project title is required", http.StatusBadRequest)
		return
	}

	projects = append(projects, project)
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(project)
}

func updateProject(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id, err := strconv.Atoi(params["id"])
	if err != nil || id < 0 || id >= len(projects) {
		http.Error(w, "Invalid ID", http.StatusBadRequest)
		return
	}

	var updatedProject Project
	json.NewDecoder(r.Body).Decode(&updatedProject)
	if updatedProject.Title == "" {
		http.Error(w, "Project title is required", http.StatusBadRequest)
		return
	}
	projects[id] = updatedProject
	json.NewEncoder(w).Encode(updatedProject)
}

func deleteProject(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id, err := strconv.Atoi(params["id"])
	if err != nil || id < 0 || id >= len(projects) {
		http.Error(w, "Invalid ID", http.StatusBadRequest)
		return
	}

	projects = append(projects[:id], projects[id+1:]...)
	w.WriteHeader(http.StatusNoContent)
}
