#!/bin/bash

# Skills management script for AI Visual Synthesis
# This script installs the project's prompt engineering frameworks as a local agent skill.

SKILLS_DIR="$HOME/.agents/skills"
PROJECT_SKILL_NAME="ai-visual-synthesis"
PROJECT_SKILL_DIR="$SKILLS_DIR/$PROJECT_SKILL_NAME"

install_skill() {
  echo "Installing AI Visual Synthesis skill..."
  mkdir -p "$PROJECT_SKILL_DIR"
  
  # Copy the skill definition
  if [ -f "SKILLS.md" ]; then
    cp "SKILLS.md" "$PROJECT_SKILL_DIR/SKILL.md"
    echo "✅ Skill documentation installed to $PROJECT_SKILL_DIR/SKILL.md"
  else
    echo "⚠️ SKILLS.md not found in the current directory."
    exit 1
  fi

  echo "Agent skill '$PROJECT_SKILL_NAME' successfully installed!"
  echo "Agents can now load this skill using their configuration tools."
}

remove_skill() {
  echo "Removing AI Visual Synthesis skill..."
  if [ -d "$PROJECT_SKILL_DIR" ]; then
    rm -rf "$PROJECT_SKILL_DIR"
    echo "✅ Skill successfully removed."
  else
    echo "⚠️ Skill not found in $SKILLS_DIR."
  fi
}

case "${1:-install}" in
  install)
    install_skill
    ;;
  remove)
    remove_skill
    ;;
  *)
    echo "Usage: $0 {install|remove}"
    ;;
esac
