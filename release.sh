#!/bin/bash

# Auto release script for new version
# Usage: ./release.sh <version>
# Example: ./release.sh 1.0.1

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check version parameter
if [ -z "$1" ]; then
    echo -e "${YELLOW}Enter version number (e.g., 1.0.1):${NC}"
    read -r VERSION_INPUT
    if [ -z "$VERSION_INPUT" ]; then
        echo -e "${RED}❌ Version number is required!${NC}"
        echo "Usage: ./release.sh <version>"
        echo "Example: ./release.sh 1.0.1"
        exit 1
    fi
    VERSION="v$VERSION_INPUT"
else
    VERSION="v$1"
fi

SOURCE_DIR="../chatbot-mcp-vite-frontend/dist"
DEST_DIR="./dist"

echo -e "${YELLOW}🚀 Starting release process for version ${VERSION}...${NC}"

# Check source directory
if [ ! -d "$SOURCE_DIR" ]; then
    echo -e "${RED}❌ Directory not found: $SOURCE_DIR${NC}"
    echo "Please build frontend first: cd ../chatbot-mcp-vite-frontend && pnpm build"
    exit 1
fi

# Create dist directory if not exists
mkdir -p "$DEST_DIR"

# Copy files from frontend/dist to deployment/dist
echo -e "${GREEN}📦 Copying files from $SOURCE_DIR to $DEST_DIR...${NC}"
cp -r "$SOURCE_DIR"/* "$DEST_DIR"/

# Check if there are changes
if [ -z "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}⚠️  No changes to commit${NC}"
    read -p "Do you still want to create tag $VERSION? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 0
    fi
else
    # Add and commit changes
    echo -e "${GREEN}📝 Committing changes...${NC}"
    git add .
    git commit -m "Release $VERSION"
    
    # Push to GitHub
    echo -e "${GREEN}🔄 Pushing to GitHub...${NC}"
    git push origin main
fi

# Create tag
echo -e "${GREEN}🏷️  Creating tag $VERSION...${NC}"
git tag -a "$VERSION" -m "Release $VERSION"

# Push tag
echo -e "${GREEN}🚀 Pushing tag to GitHub...${NC}"
git push origin "$VERSION"

echo -e "${GREEN}✅ Release $VERSION completed!${NC}"
echo -e "${YELLOW}📦 GitHub will automatically create release at:${NC}"
echo "   https://github.com/nguyenngocdue/chatbot-mcp-deployment/releases/tag/$VERSION"
echo ""
echo -e "${YELLOW}📝 Available files:${NC}"
echo "   https://github.com/nguyenngocdue/chatbot-mcp-deployment/releases/download/$VERSION/chatbot-embed.umd.js"
echo "   https://github.com/nguyenngocdue/chatbot-mcp-deployment/releases/download/$VERSION/chatbot-mcp-vite-frontend.css"
echo ""
echo -e "${YELLOW}🌐 Or use CDN (jsDelivr):${NC}"
echo "   https://cdn.jsdelivr.net/gh/nguyenngocdue/chatbot-mcp-deployment@$VERSION/dist/chatbot-embed.umd.js"
echo "   https://cdn.jsdelivr.net/gh/nguyenngocdue/chatbot-mcp-deployment@$VERSION/dist/chatbot-mcp-vite-frontend.css"
