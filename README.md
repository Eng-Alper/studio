# StockPilot

![StockPilot Logo](https://via.placeholder.com/150?text=StockPilot)

## What it does

StockPilot is a modern, AI-powered inventory management system built with Next.js. It helps businesses:

- Track inventory items in real-time
- Predict when items need to be reordered using AI analysis
- Manage users with different permission levels
- View inventory data with sorting and filtering capabilities
- Update stock quantities with easy-to-use interfaces

## Why it's useful

StockPilot solves critical inventory challenges:

- **Prevent Stockouts**: AI-driven predictions help you reorder at the right time
- **Reduce Excess Inventory**: Smart analytics prevent overordering
- **Save Time**: Intuitive UI makes inventory management faster and easier
- **Improve Accuracy**: Real-time tracking eliminates manual counting errors
- **Scale Easily**: Cloud-based architecture handles growing inventories

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- Google Gemini API key for AI features

### Installation

1. Clone the repository

   ```bash
   git clone <repository-url>
   cd studio
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env.local` file with your API keys

   ```plaintext
   GOOGLE_GENAI_API_KEY=your_api_key_here
   ```

4. Start the development server

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to see the application

## Deployment

The application is designed to be deployed on AWS EKS using Kubernetes:

```bash
# Configure AWS credentials
aws configure

# Update kubeconfig for your EKS cluster
aws eks update-kubeconfig --name your-cluster-name

# Deploy the application
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS, Radix UI components
- **AI Integration**: Google Gemini 2.0 Flash via genkit
- **Deployment**: AWS EKS, Kubernetes
- **CI/CD**: GitHub Actions

## License

This project is licensed under the MIT License - see the LICENSE file for details.
