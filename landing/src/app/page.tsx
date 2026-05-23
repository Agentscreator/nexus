interface Task {
  id: number;
  title: string;
  status: TaskStatus;
  category: Category;
  effort: string;
  description: string;
  subtasks: Array<{ name: string; completed: boolean }>;
}

type TaskStatus = 'completed' | 'in_progress' | 'pending';
type Category = 'Backend' | 'IR Development' | 'AI/ML' | 'DevOps' | 'Frontend';

interface Task {
  id: number;
  title: string;
  status: TaskStatus;
  category: Category;
  effort: string;
  description: string;
  subtasks: Array<{ name: string; completed: boolean }>;
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Nexus Agent Core: GitLab Integration",
    status: "completed",
    category: "Backend",
    effort: "M · 3 days",
    description: "Integrate the Nexus agent with the GitLab MCP server to enable DevOps automation.",
    subtasks: [
      { name: "Establish connection with GitLab MCP", completed: true },
      { name: "Implement authentication and authorization", completed: true },
      { name: "Create 9 GitLab tools (projects, issues, MRs)", completed: true },
      { name: "Write integration tests for GitLab connection", completed: true }
    ]
  },
  {
    id: 2,
    title: "Real-time WebSocket Dashboard",
    status: "completed",
    category: "Frontend",
    effort: "M · 4 days",
    description: "A real-time dashboard to visualize agent activity, tool calls, and costs.",
    subtasks: [
      { name: "Set up WebSocket server for real-time updates", completed: true },
      { name: "Design and build the dashboard UI", completed: true },
      { name: "Display agent thoughts and actions", completed: true },
      { name: "Track and display token usage and costs", completed: true }
    ]
  },
  {
    id: 3,
    title: "Terminal UI (TUI) with Live Streaming",
    status: "completed",
    category: "Frontend",
    effort: "L · 5 days",
    description: "Interactive terminal interface with agent picker, live streaming, and chat.",
    subtasks: [
      { name: "Build agent picker modal (Ctrl+A)", completed: true },
      { name: "Implement live streaming pane for LLM tokens", completed: true },
      { name: "Add PDF attachment support", completed: true },
      { name: "Multi-graph commands and session management", completed: true }
    ]
  },
  {
    id: 4,
    title: "Demo Video Production",
    status: "pending",
    category: "DevOps",
    effort: "M · 3 days",
    description: "Create a 3-minute demo video showing Nexus solving a real CI/CD pipeline failure.",
    subtasks: [
      { name: "Write demo script and storyboard", completed: false },
      { name: "Set up demo GitLab project with failing pipeline", completed: false },
      { name: "Record screen capture of agent execution", completed: false },
      { name: "Edit video with voiceover and captions", completed: false }
    ]
  },
  {
    id: 5,
    title: "Google Cloud Deployment",
    status: "pending",
    category: "DevOps",
    effort: "M · 2 days",
    description: "Deploy Nexus to Google Cloud Run with public URL for hackathon judges.",
    subtasks: [
      { name: "Create Dockerfile for containerization", completed: false },
      { name: "Set up Google Cloud project and credentials", completed: false },
      { name: "Deploy to Cloud Run with environment variables", completed: false },
      { name: "Test public accessibility and dashboard", completed: false }
    ]
  },
  {
    id: 6,
    title: "Devpost Submission",
    status: "pending",
    category: "DevOps",
    effort: "S · 1 day",
    description: "Complete and submit the Devpost hackathon entry with all required materials.",
    subtasks: [
      { name: "Upload demo video to YouTube/Vimeo", completed: false },
      { name: "Fill out Devpost submission form", completed: false },
      { name: "Add screenshots of dashboard and TUI", completed: false },
      { name: "Submit before June 11, 2026 deadline", completed: false }
    ]
  },
  {
    id: 7,
    title: "Documentation & Polish",
    status: "in_progress",
    category: "Frontend",
    effort: "M · 3 days",
    description: "Improve documentation, add architecture diagrams, and polish the landing page.",
    subtasks: [
      { name: "Create architecture diagram", completed: false },
      { name: "Add dashboard screenshots to README", completed: false },
      { name: "Update landing page with accurate features", completed: true },
      { name: "Write deployment guide", completed: false }
    ]
  },
  {
    id: 8,
    title: "CI/CD Self-Healing Demo Scenario",
    status: "in_progress",
    category: "AI/ML",
    effort: "L · 4 days",
    description: "Build a compelling demo showing Nexus automatically fixing a failing GitLab pipeline.",
    subtasks: [
      { name: "Create sample GitLab project with tests", completed: true },
      { name: "Implement agent workflow for pipeline monitoring", completed: false },
      { name: "Add automatic failure detection and analysis", completed: false },
      { name: "Test end-to-end self-healing workflow", completed: false }
    ]
  }
];

const statusColors: Record<TaskStatus, string> = {
  completed: 'bg-green-100 text-green-800 border-green-200',
  in_progress: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  pending: 'bg-gray-100 text-gray-800 border-gray-200'
};

const statusLabels: Record<TaskStatus, string> = {
  completed: 'Completed',
  in_progress: 'In Progress',
  pending: 'To Do'
};

const categoryColors: Record<Category, string> = {
  Backend: 'bg-blue-100 text-blue-800',
  'IR Development': 'bg-purple-100 text-purple-800',
  'AI/ML': 'bg-green-100 text-green-800',
  DevOps: 'bg-red-100 text-red-800',
  Frontend: 'bg-pink-100 text-pink-800'
};

export default function Home() {
  const completedTasks = tasks.filter(task => task.status === 'completed');
  const inProgressTasks = tasks.filter(task => task.status === 'in_progress');
  const pendingTasks = tasks.filter(task => task.status === 'pending');

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-effect z-50 border-b border-blue-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-nexus-blue-500 via-nexus-cyan-500 to-nexus-indigo-600 rounded-xl shadow-lg animate-glow"></div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-nexus-blue-700 to-nexus-indigo-700">Nexus</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-nexus-blue-600 font-medium transition-colors">Features</a>
              <a href="#architecture" className="text-gray-700 hover:text-nexus-blue-600 font-medium transition-colors">Architecture</a>
              <a href="#demo" className="text-gray-700 hover:text-nexus-blue-600 font-medium transition-colors">Demo</a>
              <a href="#docs" className="text-gray-700 hover:text-nexus-blue-600 font-medium transition-colors">Docs</a>
              <a href="#progress" className="text-gray-700 hover:text-nexus-blue-600 font-medium transition-colors">Progress</a>
            </div>
            <a 
              href="https://github.com/Agentscreator/nexus" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-nexus-blue-600 to-nexus-indigo-600 text-white px-6 py-2.5 rounded-xl hover:from-nexus-blue-700 hover:to-nexus-indigo-700 transition-all shadow-lg hover:shadow-xl font-semibold"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-nexus-blue-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-nexus-indigo-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-nexus-cyan-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 glass-effect px-5 py-2.5 rounded-full mb-8 animate-fade-in border border-nexus-blue-200">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nexus-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-nexus-blue-600"></span>
            </span>
            <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-nexus-blue-700 to-nexus-indigo-700">Google Cloud Rapid Agent Hackathon 2026</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 mb-6 animate-slide-up leading-tight">
            Building Agents That
            <br />
            <span className="gradient-text-alt">Accomplish Missions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto animate-slide-up leading-relaxed">
            Powered by <strong className="text-nexus-blue-700">Gemini 3</strong> and partner MCP servers. 
            Not just a chatbot — an intelligent multi-agent system that reasons, plans, and executes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a 
              href="https://github.com/Agentscreator/nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-nexus-blue-600 to-nexus-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:from-nexus-blue-700 hover:to-nexus-indigo-700 transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Get Started →
            </a>
            <a 
              href="#demo"
              className="glass-effect text-nexus-blue-700 border-2 border-nexus-blue-300 px-10 py-4 rounded-xl text-lg font-bold hover:bg-nexus-blue-50 transition-all hover:scale-105 shadow-lg"
            >
              Watch Demo
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="glass-effect p-6 rounded-2xl border border-nexus-blue-200 card-hover">
              <div className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-nexus-blue-600 to-nexus-cyan-600 mb-2">2M</div>
              <div className="text-gray-700 font-medium">Token Context</div>
            </div>
            <div className="glass-effect p-6 rounded-2xl border border-nexus-cyan-200 card-hover">
              <div className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-nexus-cyan-600 to-nexus-blue-600 mb-2">9+</div>
              <div className="text-gray-700 font-medium">GitLab Tools</div>
            </div>
            <div className="glass-effect p-6 rounded-2xl border border-nexus-indigo-200 card-hover">
              <div className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-nexus-indigo-600 to-purple-600 mb-2">Live</div>
              <div className="text-gray-700 font-medium">Dashboard</div>
            </div>
            <div className="glass-effect p-6 rounded-2xl border border-blue-200 card-hover">
              <div className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-nexus-indigo-600 mb-2">5+</div>
              <div className="text-gray-700 font-medium">Partner Tracks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Quick Start</h2>
            <p className="text-xl text-gray-700">Get your first agent running in minutes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Installation */}
            <div className="glass-effect rounded-2xl p-8 border border-nexus-blue-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-nexus-blue-500 to-nexus-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Install & Configure</h3>
              </div>
              <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono">
{`# Clone the repository
git clone https://github.com/Agentscreator/nexus
cd nexus

# Run quickstart
./quickstart.sh

# Set up credentials
export GOOGLE_API_KEY=your_key
export GITLAB_TOKEN=your_token`}
                </pre>
              </div>
            </div>

            {/* Run Agent */}
            <div className="glass-effect rounded-2xl p-8 border border-nexus-cyan-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-nexus-cyan-500 to-nexus-cyan-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Launch Dashboard</h3>
              </div>
              <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono">
{`# Start the server with dashboard
uv run python -m framework server

# Or use the Terminal UI
hive tui

# Access at http://localhost:8787`}
                </pre>
              </div>
            </div>

            {/* GitLab Setup */}
            <div className="glass-effect rounded-2xl p-8 border border-nexus-indigo-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-nexus-indigo-500 to-nexus-indigo-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Configure GitLab</h3>
              </div>
              <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono">
{`# Interactive setup
maven gitlab setup

# Verify connection
maven gitlab status

# Test integration
maven gitlab test`}
                </pre>
              </div>
            </div>

            {/* Run Mission */}
            <div className="glass-effect rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  4
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Run Your First Mission</h3>
              </div>
              <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono">
{`# Execute an agent
uv run python -m framework run \\
  exports/your_agent \\
  --input '{"goal": "Fix CI/CD"}'

# Watch in real-time dashboard!`}
                </pre>
              </div>
            </div>
          </div>

          {/* Features callout */}
          <div className="mt-12 glass-effect rounded-2xl p-8 border border-nexus-blue-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What You Get</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🖥️</div>
                <h4 className="font-bold text-gray-900 mb-2">WebSocket Dashboard</h4>
                <p className="text-gray-600 text-sm">Real-time agent execution, tool calls, and cost tracking</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💬</div>
                <h4 className="font-bold text-gray-900 mb-2">Terminal UI (TUI)</h4>
                <p className="text-gray-600 text-sm">Interactive chat interface with live streaming</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔧</div>
                <h4 className="font-bold text-gray-900 mb-2">Agent Builder</h4>
                <p className="text-gray-600 text-sm">Hive Coder meta-agent builds agents from natural language</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Task Tracking Section */}
      <section id="progress" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Development Progress</h2>
            <p className="text-xl text-gray-700">Track our hackathon features and implementation status</p>
            
            {/* Progress Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
              <div className="glass-effect p-8 rounded-2xl border border-green-200 card-hover">
                <div className="text-5xl font-extrabold text-green-600 mb-2">{completedTasks.length}</div>
                <div className="text-gray-700 font-semibold">Completed</div>
              </div>
              <div className="glass-effect p-8 rounded-2xl border border-yellow-200 card-hover">
                <div className="text-5xl font-extrabold text-yellow-600 mb-2">{inProgressTasks.length}</div>
                <div className="text-gray-700 font-semibold">In Progress</div>
              </div>
              <div className="glass-effect p-8 rounded-2xl border border-gray-300 card-hover">
                <div className="text-5xl font-extrabold text-gray-600 mb-2">{pendingTasks.length}</div>
                <div className="text-gray-700 font-semibold">To Do</div>
              </div>
            </div>
          </div>

          {/* Task Cards */}
          <div className="space-y-6">
            {tasks.map((task) => (
              <div key={task.id} className="glass-effect rounded-2xl shadow-xl p-8 border border-nexus-blue-200/50 hover:border-nexus-blue-400 transition-all hover:shadow-2xl">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2 flex-wrap gap-2">
                      <h3 className="text-2xl font-bold text-gray-900">{task.title}</h3>
                      <span className={`px-4 py-1.5 rounded-full text-sm font-semibold border-2 ${statusColors[task.status]}`}>
                        {statusLabels[task.status]}
                      </span>
                      <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${categoryColors[task.category]}`}>
                        {task.category}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2 text-lg">{task.description}</p>
                    <span className="text-sm text-gray-600 font-semibold bg-gray-100 px-3 py-1 rounded-full">{task.effort}</span>
                  </div>
                </div>
                
                {/* Subtasks */}
                <div className="mt-6">
                  <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide">Subtasks:</h4>
                  <div className="space-y-3">
                    {task.subtasks.map((subtask, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shadow-md ${
                          subtask.completed 
                            ? 'bg-gradient-to-br from-green-500 to-green-600' 
                            : task.status === 'in_progress' 
                              ? 'bg-gradient-to-br from-yellow-500 to-yellow-600' 
                              : 'bg-gray-300'
                        }`}>
                          {subtask.completed && (
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-base ${
                          subtask.completed ? 'text-gray-800 font-medium' : 'text-gray-600'
                        }`}>
                          {subtask.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-nexus-blue-50 to-nexus-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Why Nexus Agent Framework?</h2>
            <p className="text-xl text-gray-700">Move beyond chatbots. Build agents that take action.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-effect p-8 rounded-2xl border border-nexus-blue-200 card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-nexus-blue-500 to-nexus-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Gemini 3 Reasoning</h3>
              <p className="text-gray-700 leading-relaxed">
                Advanced reasoning with extended context (up to 2M tokens). Plans multi-step missions and adapts to failures.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-effect p-8 rounded-2xl border border-nexus-cyan-200 card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-nexus-cyan-500 to-nexus-cyan-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Partner MCP Integration</h3>
              <p className="text-gray-700 leading-relaxed">
                GitLab, Elastic, MongoDB, Fivetran, Arize. Specialized capabilities without custom API code.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-effect p-8 rounded-2xl border border-nexus-indigo-200 card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-nexus-indigo-500 to-nexus-indigo-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Self-Healing</h3>
              <p className="text-gray-700 leading-relaxed">
                When tasks fail, agents adapt their plans and retry automatically. No manual intervention needed.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="glass-effect p-8 rounded-2xl border border-blue-200 card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Human-in-the-Loop</h3>
              <p className="text-gray-700 leading-relaxed">
                Confidence-based escalation. Agents know when they need human approval for critical decisions.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="glass-effect p-8 rounded-2xl border border-purple-200 card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Real-Time Observability</h3>
              <p className="text-gray-700 leading-relaxed">
                WebSocket dashboard shows agent execution, tool calls, token usage, and costs in real-time.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="glass-effect p-8 rounded-2xl border border-indigo-200 card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Cost Optimized</h3>
              <p className="text-gray-700 leading-relaxed">
                Smart routing: Gemini Flash for simple tasks, Pro for complex reasoning. Track spend per mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-700">Multi-agent orchestration powered by Gemini 3</p>
          </div>

          <div className="glass-effect rounded-3xl shadow-2xl p-10 md:p-14 border border-nexus-blue-200">
            <div className="space-y-10">
              {/* Step 1 */}
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-nexus-blue-500 to-nexus-blue-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Mission Received</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">User defines a goal or event triggers an action (e.g., "Fix failing CI/CD pipeline")</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-nexus-cyan-500 to-nexus-cyan-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Gemini 3 Plans</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Orchestrator analyzes the goal, generates a dynamic agent graph, and plans the execution steps</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-nexus-indigo-500 to-nexus-indigo-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Agents Execute</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Specialized agents use partner MCP servers (GitLab, Elastic, etc.) to accomplish tasks in parallel</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Validate & Adapt</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Outcomes are evaluated. On failure, the orchestrator adapts the plan and retries automatically</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Mission Complete</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">Success! Results are logged, costs tracked, and decisions recorded for continuous improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-white/50 backdrop-blur-sm relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-nexus-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-nexus-indigo-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">See Nexus in Action</h2>
            <p className="text-xl text-gray-700">Watch how our agents autonomously solve real-world DevOps challenges</p>
          </div>

          <div className="glass-effect rounded-3xl shadow-2xl p-4 border border-nexus-blue-200 max-w-5xl mx-auto">
            <div className="relative aspect-video bg-gradient-to-br from-nexus-blue-900 to-nexus-indigo-900 rounded-2xl overflow-hidden group">
              {/* Video placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform cursor-pointer">
                    <svg className="w-12 h-12 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white text-2xl font-bold mb-2">Demo Video Coming Soon</p>
                  <p className="text-blue-200 text-lg">3-minute walkthrough of Nexus solving a CI/CD pipeline failure</p>
                </div>
              </div>
              
              {/* Animated grid overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                  {[...Array(48)].map((_, i) => (
                    <div key={i} className="border border-white/10"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Demo highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            <div className="glass-effect p-6 rounded-xl border border-nexus-blue-200 text-center">
              <div className="text-4xl font-bold text-nexus-blue-600 mb-2">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Real-Time Execution</h3>
              <p className="text-gray-700 text-sm">Watch agents reason and act in real-time</p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-nexus-cyan-200 text-center">
              <div className="text-4xl font-bold text-nexus-cyan-600 mb-2">🔄</div>
              <h3 className="font-bold text-gray-900 mb-2">Self-Healing Demo</h3>
              <p className="text-gray-700 text-sm">See automatic failure recovery in action</p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-nexus-indigo-200 text-center">
              <div className="text-4xl font-bold text-nexus-indigo-600 mb-2">👁️</div>
              <h3 className="font-bold text-gray-900 mb-2">Human Oversight</h3>
              <p className="text-gray-700 text-sm">Confidence-based escalation workflow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-nexus-blue-50 to-nexus-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Real-World Use Cases</h2>
            <p className="text-xl text-gray-700">Solving actual problems across multiple domains</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Use Case 1 */}
            <div className="glass-effect border-2 border-nexus-blue-300 rounded-2xl p-10 hover:border-nexus-blue-500 transition-all card-hover">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-nexus-blue-500 to-nexus-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">DevOps Automation</h3>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Automatically detect, diagnose, and fix failing CI/CD pipelines. Monitor GitLab projects 24/7.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-nexus-cyan-600 mr-3 text-xl font-bold">✓</span>
                  <span className="text-base">Pipeline failure detection & root cause analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nexus-cyan-600 mr-3 text-xl font-bold">✓</span>
                  <span className="text-base">Automated fixes with merge request creation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nexus-cyan-600 mr-3 text-xl font-bold">✓</span>
                  <span className="text-base">80% of failures resolved without human intervention</span>
                </li>
              </ul>
            </div>

            {/* Use Case 2 */}
            <div className="glass-effect border-2 border-nexus-indigo-300 rounded-2xl p-10 hover:border-nexus-indigo-500 transition-all card-hover">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-nexus-indigo-500 to-nexus-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Security Management</h3>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Scan for vulnerabilities, generate patches, and create merge requests automatically.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-nexus-cyan-600 mr-3 text-xl font-bold">✓</span>
                  <span className="text-base">SAST/DAST scan result analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nexus-cyan-600 mr-3 text-xl font-bold">✓</span>
                  <span className="text-base">Automated dependency updates & patches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nexus-cyan-600 mr-3 text-xl font-bold">✓</span>
                  <span className="text-base">Vulnerabilities patched in minutes, not days</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="animated-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl shadow-lg"></div>
              <span className="text-2xl font-bold">Nexus Agent Framework</span>
            </div>
            <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">
              Building the future of autonomous agent systems. Powered by Google Cloud and Gemini 3.
            </p>
            <div className="flex justify-center space-x-8 mb-10">
              <a href="https://github.com/Agentscreator/nexus" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors font-semibold text-lg">
                GitHub
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors font-semibold text-lg">
                Documentation
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors font-semibold text-lg">
                API Reference
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors font-semibold text-lg">
                Support
              </a>
            </div>
            <div className="pt-8 border-t border-white/20">
              <p className="text-blue-100 text-base">
                © 2026 Nexus Agent Framework. Built for the Google Cloud Rapid Agent Hackathon.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}