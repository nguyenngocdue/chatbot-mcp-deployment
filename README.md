# Chatbot MCP Deployment

This repository contains the production-ready deployment files for the Chatbot MCP (Model Context Protocol) widget. It serves as a CDN-ready distribution that allows easy embedding of the chatbot widget into any website.

## 📋 Project Purpose

The Chatbot MCP Deployment project is designed to:

- **Centralized Distribution**: Provide a single, reliable source for the chatbot widget files
- **Version Control**: Manage releases and versions of the chatbot widget through GitHub Releases
- **CDN Integration**: Enable fast, global access to widget files via jsDelivr CDN
- **Easy Integration**: Allow developers to embed the chatbot with minimal configuration
- **Automatic Updates**: Streamline the process of releasing new versions from the frontend build

## 📁 Project Structure

```
chatbot-mcp-deployment/
├── dist/                      # Production build files
│   ├── chatbot-embed.umd.js  # UMD bundle for embedding
│   ├── chatbot-embed.es.js   # ES module bundle
│   ├── chatbot-mcp-vite-frontend.css  # Widget styles
│   └── vite.svg              # Assets
├── release.sh                # Automated release script
└── README.md                 # This file
```

## 🚀 How to Release a New Version

### Prerequisites

1. Make sure the frontend is built:
   ```bash
   cd ../chatbot-mcp-vite-frontend
   pnpm build
   ```

2. Ensure you're in the deployment repository:
   ```bash
   cd ../chatbot-mcp-deployment
   ```

### Release Methods

#### Method 1: With Version Parameter
```bash
./release.sh 1.0.3
```

#### Method 2: Interactive Mode
```bash
./release.sh
# You will be prompted to enter the version number
```

### What the Release Script Does

The `release.sh` script automatically:

1. ✅ Copies latest build files from `../chatbot-mcp-vite-frontend/dist`
2. ✅ Adds and commits changes to Git
3. ✅ Pushes to GitHub
4. ✅ Creates a version tag (e.g., `v1.0.3`)
5. ✅ Pushes the tag to GitHub
6. ✅ GitHub automatically creates a Release
7. ✅ Displays CDN URLs for the new version

### After Release

Once the release is complete, the widget will be available at:

**Direct Download:**
```
https://github.com/nguyenngocdue/chatbot-mcp-deployment/releases/download/v1.0.3/chatbot-embed.umd.js
https://github.com/nguyenngocdue/chatbot-mcp-deployment/releases/download/v1.0.3/chatbot-mcp-vite-frontend.css
```

**CDN (jsDelivr):**
```
https://cdn.jsdelivr.net/gh/nguyenngocdue/chatbot-mcp-deployment@v1.0.3/dist/chatbot-embed.umd.js
https://cdn.jsdelivr.net/gh/nguyenngocdue/chatbot-mcp-deployment@v1.0.3/dist/chatbot-mcp-vite-frontend.css
```

## 📦 Using the Chatbot Widget

### Basic Integration

Add the following to your HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Chatbot Widget CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nguyenngocdue/chatbot-mcp-deployment@latest/dist/chatbot-mcp-vite-frontend.css">
</head>
<body>
    <!-- Your website content -->
    
    <!-- Chatbot Widget Script -->
    <script src="https://cdn.jsdelivr.net/gh/nguyenngocdue/chatbot-mcp-deployment@latest/dist/chatbot-embed.umd.js"></script>
</body>
</html>
```

### Version-Specific Integration

For production, it's recommended to use a specific version:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nguyenngocdue/chatbot-mcp-deployment@v1.0.3/dist/chatbot-mcp-vite-frontend.css">
<script src="https://cdn.jsdelivr.net/gh/nguyenngocdue/chatbot-mcp-deployment@v1.0.3/dist/chatbot-embed.umd.js"></script>
```

## 🔧 Development Workflow

1. **Develop** changes in `chatbot-mcp-vite-frontend`
2. **Build** the frontend: `cd chatbot-mcp-vite-frontend && pnpm build`
3. **Release** new version: `cd chatbot-mcp-deployment && ./release.sh x.y.z`
4. **Integrate** the new version in your website

## 📝 Versioning

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR** version (x.0.0): Incompatible API changes
- **MINOR** version (0.x.0): New features, backward compatible
- **PATCH** version (0.0.x): Bug fixes, backward compatible

## 🔗 Related Repositories

- **Frontend**: `chatbot-mcp-vite-frontend` - The source code for the chatbot widget
- **Backend**: `chatbot-mcp-nestjs-backend` - The API server for the chatbot

## 📄 License

This project is part of the Chatbot MCP ecosystem.

## 🤝 Contributing

1. Make changes in the frontend repository
2. Build and test locally
3. Use the release script to create a new version
4. Update documentation if needed

---

**Last Updated**: February 2026