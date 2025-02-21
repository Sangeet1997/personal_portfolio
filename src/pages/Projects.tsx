import { Link } from "wouter";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";
import fairTraderImage1 from '@/assets/fairtrader_image_1.png';
import fairTraderImage2 from '@/assets/fairtrader_image_2.png';
import fairTraderImage3 from '@/assets/fairtrader_image_3.png';
import fairTraderImage4 from '@/assets/fairtrader_image_4.png';
import fairTraderImage5 from '@/assets/fairtrader_image_5.png';
import cotImage1 from '@/assets/cot_image_1.png';
import cotImage2 from '@/assets/cot_image_2.png';
import cotImage3 from '@/assets/cot_image_3.png';
import gcpImage1 from '@/assets/gcp_image.png';
import agileCover from '@/assets/agile_cover.jpg';



export const projects = [
  {
    "id": 1,
    "title": "REST API Development and GCP Infrastructure Setup",
    "description": "Developed and deployed a scalable Node.js REST API with authentication, CI/CD, and GCP infrastructure.",
    "image": gcpImage1,
    "tags": ["Node.js", "REST API", "Sequelize", "MySQL", "GCP", "Terraform", "CI/CD"],
    "modules": [
      {
        "heading": "Overview",
        "contents": [ 
          "Developed and deployed a scalable Node.js REST API with secure user authentication using Sequelize and MySQL. Built a robust CI/CD pipeline with GitHub Actions and Jest, while leveraging GCP services like CloudSQL, load balancing, and Cloud DNS. Automated infrastructure provisioning with Terraform and Packer, enhancing security with encryption key rings and centralized logging in GCP Log Explorer.",
        ]
      },
      {
        "heading": "Project Highlights:",
        "contents": [
          "**1. API Development: **Implemented RESTful APIs with JSON payloads, proper HTTP status codes, and token-based authentication. Endpoints included user creation, update, and retrieval.",
          "**2. Infrastructure Automation: **Used Terraform to provision and manage all GCP resources, including VPC, subnets, CloudSQL, Compute Engine instances, and load balancers.",
          "**3. Custom Images: **Built custom machine images using Packer, pre-installing necessary software and dependencies.",
          "**4. CI/CD Pipeline: **Set up GitHub Actions workflows for code validation, unit/integration testing, Packer template checks, image building, and deployment.",
          "**5. Database Management: **Initially, a local MySQL database was developed. Subsequently, this database was migrated to CloudSQL.",
          "**6. Security: **Implemented BCrypt for password hashing, token-based authentication, and used CMEK for encrypting sensitive data. Network security was enforced by restricting access to CloudSQL and using firewalls.",
          "**7. High Availability & Scalability: **Implemented a regional compute instance group manager with autoscaling and health checks. Deployed an external HTTPS Application Load Balancer for distributing traffic.",
          "**8. Serverless Functionality: **Developed a Cloud Function triggered by Pub/Sub to send verification emails to new users.",
          "**9. Monitoring & Logging: **Configured the application to write structured JSON logs and integrated with Google Cloud Logging. Installed Ops Agent for monitoring.",
          "**10. Domain & DNS: **Registered a domain, configured Cloud DNS, and pointed the domain to the load balancer IP.",
        //   {
        //     "type": "images",
        //     "items": [
        //       { "src": "/images/dashboard.png", "alt": "API Dashboard" },
        //       { "src": "/images/metrics.png", "alt": "Performance Metrics" }
        //     ]
        //   }
        ]
      },
      {
        "heading": "Key Achievements:",
        "contents": [
          "Fully automated infrastructure and application deployment.",
          "Implemented robust security measures.",
          "Achieved high availability and scalability.",
          "Integrated serverless components.",
          "Established a comprehensive CI/CD pipeline.",
        ]
      },
      {
        "heading": "",
        "contents": [
          "This project successfully demonstrated the development and deployment of a cloud-native web application on GCP, utilizing a wide range of services and best practices.",
        {
          "type": "link",
          "url": "https://github.com/csye6225-sangeet-saha/webapp",
          "text": "Webapp Repo"
        },
        {
          "type": "link",
          "url": "https://github.com/csye6225-sangeet-saha/tf-gcp-infra",
          "text": "Terraform Infra Repo"
        },
        {
          "type": "link",
          "url": "https://github.com/csye6225-sangeet-saha/serverless",
          "text": "Serverless Repo"
        }
        ]
      }
    ],
    "link": "",
    "github": ""  
  },
  {
    "id": 2,
    "title": "Chain of Thought (CoT) Reasoning Agent",
    "description": "Designed to solve complex problems by breaking them into smaller logical steps, with a transparent reasoning process and modular architecture.",
    "image": cotImage1,
    "tags": ["Python", "Gradio", "RAG", "Chroma DB", "Langchain", "NetworkX", "AI Reasoning"],
    "modules": [
        {
            "heading": "Overview",
            "contents": [
              "Developed a chain-of-thought AI architecture to address the limitations of shallow reasoning and simplistic workflows by enabling structured task decomposition. The system utilizes tree-structured AI agents, allowing specialized handling of subtasks for more efficient problem-solving. Implemented using Gradio, LangChain, Ollama, LLaMA 3.3 (70B), and mixtral-8x7b-32768, the architecture enhances AI-driven decision-making and automation. Collaborated with cross-functional teams, mentoring teammates on new technologies and contributing to scalable AI solutions. This approach significantly improves reasoning depth, workflow automation, and overall system efficiency."
            ]
        },
        {
            "heading": "Company: Humanitarians AI",
            "contents": [
            {
                "type": "link",
                "url": "https://www.humanitarians.ai/",
                "text": "Humanitarians AI Website"
            },
            ]
        },
        {
            "heading": "Features",
            "contents": [
                "- **Deep Logical Reasoning:** Breaks down complex problems into smaller, manageable sub-problems.",
                "- **Transparent Decision-Making:** Displays every step of reasoning in a JSON file.",
                "- **Modular and Extensible Design:** Integrates various LLM APIs without modifying core logic.",
                "- **Agent Interface:** Provides a unified interface for all agents to ensure consistency.",
                "- **Knowledge Base and Short-Term Memory:** Efficient data management using Chroma DB.",
                "- **Tree Structure for Agents:** Configurable parent-child agent relationships.",
                "- **Final Output Generation:** Produces detailed articles based on problem statements.",
                "- **Explainability:** Includes reasoning and sources for every decision made by the agent."
            ]
        },
        {
            "heading": "How to Install and Use the Project",
            "contents": [
                "**Install Ollama:** Download from the official website and pull required models using `ollama pull llama3.2:3b` and `ollama pull llama3.1:8b`.",
                "**Obtain Groq API Key:** Sign up at Groq's website, generate an API key, and set it as an environment variable.",
                "**Clone the Repository:** Use `git clone <repository_url>` to clone the project.",
                "**Set Up a Virtual Environment:** Create and activate a virtual environment using Python.",
                "**Install Dependencies:** Run `pip install -r requirements.txt` to install necessary packages.",
                "**Run the Application:** Start the Gradio interface with `python main.py` or run CoT agents with JSON input using `python app_0.py path_to_config.json path_to_pdf_file.pdf`.",
                "**Access the Interface:** Open your browser at `http://localhost:7860` to interact with the system."
            ]
        },
        {
            "heading": "Screenshots",
            "contents": [
                {
                    "type": "images",
                    "items": [
                        { "src": cotImage1, "alt": "Screenshot of the CoT Reasoning Agent gradio interface" },
                    ]
                },
                "Screenshot of the CoT Reasoning Agent gradio interface with different parameters",
                {
                    "type": "images",
                    "items": [
                        { "src": cotImage2, "alt": "Response Example of the CoT Reasoning Agent using the prompt: Plan a school trip to Boston" },
                    ]
                },
                "Response Example of the CoT Reasoning Agent using the prompt: Plan a school trip to Boston",
                {
                    "type": "images",
                    "items": [
                        { "src": cotImage3, "alt": "JSON file " }
                    ]
                },
                "JSON file with different agents, their tasks and responses "
            ]
        },
        {
            "heading": "Key Achievements",
            "contents": [
                "- Successfully implemented a modular architecture enabling easy integration of different LLM models.",
                "- Developed a user-friendly Gradio interface for seamless interaction with users.",
                "- Achieved efficient data handling using Chroma DB for knowledge management."
            ]
        },
        {
            "heading": "Architecture",
            "contents": [
                "- **Agent Module:** Handles problem decomposition, hypothesis generation, and conclusion refinement.",
                "- **LLM Interface:** Manages interactions with different LLM models with Ollama and Groq for generating responses.",
                "- **Data Management:** Utilizes Chroma DB for storing knowledge base.",
                "- **Gradio Interface:** Provides an intuitive web interface for inputting problems and displaying results.",
                "- **Visualization Module:** Uses NetworkX and Matplotlib to visualize tree structure agent creation."
            ]
        }
    ],
    "link": "",
    "github": "https://github.com/stellis-labs/Chain-of-Thought-Reasoning-Agent/tree/development-team-a"
  },
  {
    "id": 3,
    "title": "FairTrader AI",
    "description": "Developed an intelligent chatbot system for a car marketplace, integrating advanced AI technologies for price prediction, negotiation, and context-aware conversations.",
    "image": fairTraderImage3,
    "tags": ["React.js", "Tailwind CSS", "Node.js", "Express.js", "LangChain", "MongoDB", "JWT", "LLM", "RAG", "Ollama", "Llama 3.2"],
    "modules": [
        {
            "heading": "Overview",
            "contents": [
                "FairTrader AI is an advanced AI-powered car marketplace that revolutionizes how users buy and sell vehicles. At its core is **Dave**, a conversational assistant that leverages **cutting-edge AI technologies like LangChain and LLaMA 3.2** to predict car prices, facilitate price negotiations, and provide context-aware guidance. The platform ensures **seamless user experience** by integrating intelligent search, negotiation, and AI-driven navigation, making car transactions more efficient and interactive. "
            ]
        },
        {
            "heading": "Technologies Used",
            "contents": [
                "**Frontend:** React.js with Tailwind CSS for responsive design.",
                "**Backend:** Node.js and Express.js for API handling; LangChain for LLM integration.",
                "**Database:** MongoDB for user data and vector database for embedding storage.",
                "**Authentication:** JWT for secure login and session management.",
                "**AI Technologies:** Llama 3.2 via Ollama and mxbai-embed-large for embeddings."
            ]
        },
        {
            "heading": "Core Features",
            "contents": [
              "**1. AI-Powered Price Prediction**: Analyzes car details (Make, Model, Year, Type, etc.) using vector-based similarity searches to compare against existing listings. Utilizes AI-driven pricing models to determine an accurate market value based on the top 5 closest matches.",
              "**2. AI-Driven Price Negotiation**: Enables users to negotiate car prices by presenting unique selling points. Learns from user inputs and dynamically adjusts pricing based on justifications provided.",
              "**3. Advanced Car Search & Filtering**: Allows searching by tags, text, and parameters like brand, year, or condition. Uses intelligent filtering to display the most relevant results.",
              "**4. Seamless Buying & Selling Experience**: Facilitates car listing and browsing for purchases. Displays detailed car information to enhance user decision-making.",
              "**5. Personalized User Profiles**: Tracks all buying and selling history within user profiles. Enables users to view other buyers/sellers and their transactions for greater transparency.",
              "**6. AI Chat for Website Navigation**: An interactive AI chat assistant guides users through different sections. Built with React components linked to LLM-driven responses.",
              "**7. Secure & Scalable Infrastructure**: Implements session management with JWT tokens for security. Ensures secure storage of user profiles and car data using MongoDB with bcrypt encryption."
            ]
        },
        {
            "heading": "Future Improvements",
            "contents": [
                "- Enhance machine learning models for better predictions.",
                "- Expand conversational capabilities to handle more complex queries.",
                "- Integrate real-time market trends into the system.",
                "- Add car search and recommendation features within the chatbot."
            ]
        },
        {
            "heading": "Screenshots",
            "contents": [
                {
                    "type": "images",
                    "items": [
                        { "src": fairTraderImage1, "alt": "FairTrader AI Screenshot 1" },
                        { "src": fairTraderImage2, "alt": "FairTrader AI Screenshot 2" },
                        { "src": fairTraderImage3, "alt": "FairTrader AI Screenshot 3" },
                        { "src": fairTraderImage4, "alt": "FairTrader AI Screenshot 4" },
                        { "src": fairTraderImage5, "alt": "FairTrader AI Screenshot 5" }
                    ]
                }
            ]
        },
        {
            "heading": "",
            "contents": [
                {
                    "type": "link",
                    "url": "https://youtu.be/LPZE1T6YCU8",
                    "text": "Frontend Demo"
                },
                {
                    "type": "link",
                    "url": "https://youtu.be/XHBs2u6TyF4",
                    "text": "Backend Explained"
                }
            ]
        }
    ],
    "link": "",
    "github": "https://github.com/Sangeet1997/marketplace"
    },
  {
    "id": 4,
    "title": "Sorting Simplified",
    "description": "An interactive sorting algorithm visualizer with audiovisual feedback, built using JavaScript, HTML, and CSS.",
    "image": "https://github.com/user-attachments/assets/e3cd4375-be86-49b1-8aab-2e80eae63f2d",
    "tags": ["JavaScript", "HTML", "CSS", "Sorting Algorithms", "Visualization", "Web Audio API"],
    "modules": [
        {
            "heading": "Overview",
            "contents": [
                "This project is a web-based sorting algorithm visualizer that demonstrates the functionality of various sorting algorithms through dynamic bar animations. Users can control the sorting speed, reset or randomize the bars, and enjoy auditory feedback generated based on bar heights. The app supports multiple algorithms such as Bubble Sort, Merge Sort, Quick Sort, and more."
            ]
        },
        {
            "heading": "Key Features",
            "contents": [
                "**Interactive UI**: Allows users to adjust sorting speed, reset bars, and select algorithms.",
                "**Multiple Sorting Algorithms**: Includes Bubble Sort, Insertion Sort, Selection Sort, Shell Sort, Cocktail Sort, Counting Sort, Radix Sort, Merge Sort, and Quick Sort.",
                "**Auditory Feedback**: Uses the Web Audio API to generate tones corresponding to bar heights for an engaging audiovisual experience."
            ]
        },
        {
            "heading": "Getting Started",
            "contents": [
                "**Prerequisites**: A modern web browser (e.g., Chrome, Firefox). No additional dependencies are required.",
                "**Installation**:",
                "- Clone the repository using `git clone https://github.com/yourusername/sort-visualization.git`.",
                "- Navigate to the directory with `cd sort-visualization`.",
                "- Open the `index.html` file in your browser."
            ]
        },
        {
            "heading": "Usage",
            "contents": [
                "- Select a sorting algorithm by clicking its button (e.g., Bubble Sort or Quick Sort).",
                "- Adjust the sorting speed via the input box and click 'Update'.",
                "- Use the 'Reset' button to randomize bars for a new visualization.",
                "- Click 'Play' to hear tones based on bar heights without sorting."
            ]
        },
        {
            "heading": "Code Overview",
            "contents": [
                "**JavaScript**: Implements core logic for generating bars, executing sorting algorithms asynchronously for real-time visualization, and producing sounds using the Web Audio API.",
                "**HTML**: Structures elements like buttons and bars for user interaction.",
                "**CSS**: Styles elements and animations for an appealing visual experience."
            ]
        },
        {
            "heading": "Main Functions",
            "contents": [
                "- **Sorting Algorithms**: Each algorithm has a dedicated asynchronous function for visualization:",
                "`bubble()`, `insertion()`, `selection()`, `shell_sort()`, `cocktail_sort()`, `counting_sort()`, `radix_sort()`, `mergeSort()`, `quickSort()`.",
                "- **Auditory Feedback**: The `playTone(frequency)` function generates audio tones using the Web Audio API."
            ]
        },
        {
            "heading": "Future Improvements",
            "contents": [
                "- Add more sorting algorithms to expand functionality.",
                "- Allow users to specify the number of bars dynamically.",
                "- Enhance UI/UX with more customization options.",
                "- Introduce pause/resume functionality for ongoing visualizations."
            ]
        },
        {
            "heading": "Screenshots",
            "contents": [
                {
                    "type": "images",
                    "items": [
                        { 
                            "src": "https://github.com/user-attachments/assets/e3cd4375-be86-49b1-8aab-2e80eae63f2d", 
                            "alt": "Sorting Visualization Example 1" 
                        },
                        { 
                            "src": "https://github.com/user-attachments/assets/547390f4-b6f7-4205-b201-95f92c59792e", 
                            "alt": "Sorting Visualization Example 2" 
                        },
                        { 
                            "src": "https://github.com/user-attachments/assets/2d328a02-317d-497f-93fb-42101f8a2f9d", 
                            "alt": "Sorting Visualization Example 3" 
                        },
                        { 
                            "src": "https://github.com/user-attachments/assets/3502ee7b-22e9-4a95-9082-fc19d5dcf4a7", 
                            "alt": "Sorting Visualization Example 4" 
                        }
                    ]
                }
            ]
        }
    ],
    "link": "https://sangeet1997.github.io/sort_visualization/",
    "github": "https://github.com/Sangeet1997/sort_visualization"
  },
  {
    "id": 5,
    "title": "Educational Chatbot with Local LLM Integration",
    "description": "A modern, responsive chatbot powered by Llama 3.2 running locally, designed for interactive and secure educational experiences.",
    "image": "https://github.com/user-attachments/assets/8fce4b06-3d05-4df6-aabd-36339f0a94c3",
    "tags": ["LLM", "Chatbot", "Education", "Node.js", "Frontend", "Local AI"],
    "modules": [
        {
            "heading": "Overview",
            "contents": [
                "Built a responsive chatbot interface powered by the Llama 3.2 model running locally via Ollama. The system is tailored for educational purposes, offering interactive learning, quizzes, and guided assistance. It ensures data privacy, cost efficiency, and offline functionality while delivering a seamless user experience."
            ]
        },
        {
            "heading": "Features",
            "contents": [
                "**Completely Local Operation**: Ensures privacy with no external data sharing, works offline, and eliminates API costs.",
                "**Modern UI/UX**: Features a clean chat interface with dark/light modes, responsive design, real-time typing indicators, and smooth animations.",
                "**Educational Tools**: Provides contextual learning support, interactive quizzes, progress tracking, and subject-specific guidance.",
                "**Technical Features**: Includes local LLM integration via Ollama, conversation context preservation, cross-platform compatibility, and backend health monitoring."
            ]
        },
        {
            "heading": "Setup Instructions",
            "contents": [
                "**LLM Setup**: Install Ollama and pull the Llama 3.2 model using `ollama pull llama3.2`.",
                "**Backend Setup**: Clone the repository, install dependencies with `npm i`, configure environment variables in `.env`, and start the server using `node server.js`.",
                "**Frontend Setup**: Launch the chatbot interface by opening `index.html` in a browser (e.g., Chrome or Firefox)."
            ]
        },
        {
            "heading": "System Architecture",
            "contents": [
                "- **Frontend**: HTML/CSS/JavaScript-based chat interface.",
                "- **Backend**: Node.js/Express server managing requests and context.",
                "- **LLM**: Local Llama 3.2 model accessed via Ollama API.",
                "- **Context Management**: In-memory array for conversation history."
            ]
        },
        {
            "heading": "Educational Implementation",
            "contents": [
                "- Adaptive learning with responses tailored to student understanding.",
                "- Interactive quizzes to test knowledge.",
                "- Guided breakdown of complex topics.",
                "- Progress tracking through maintained context.",
                "- Multi-subject support for diverse academic needs."
            ]
        },
        {
            "heading": "Screenshots",
            "contents": [
                {
                    "type": "images",
                    "items": [
                        { "src": "https://github.com/user-attachments/assets/8fce4b06-3d05-4df6-aabd-36339f0a94c3", "alt": "Screenshot of the chatbot interface" },
                        { "src": "https://github.com/user-attachments/assets/8d2d850d-84a5-4b95-bf57-3f296dcd7280", "alt": "Screenshot of the chatbot interface2" },
                    ]
                }
            ]
        },
        {
            "heading": "Key Achievements",
            "contents": [
                "- Delivered a fully local AI-powered chatbot ensuring privacy and security.",
                "- Achieved cost-effective operation with no external API dependencies.",
                "- Designed an intuitive interface for enhanced user experience.",
                "- Integrated advanced educational features like adaptive learning paths and contextual assistance."
            ]
        }
    ],
    "link": "",
    "github": "https://github.com/Sangeet1997/Educational-Chatbot"
  },
  {
    "id": 6,
    "title": "Maze Visualization",
    "description": "A web-based visualization tool for pathfinding algorithms, showcasing BFS and DFS on dynamically generated grids with obstacles.",
    "image": "https://github.com/user-attachments/assets/877909f7-cf45-4a1e-aa15-263913faaedf",
    "tags": ["JavaScript", "HTML", "CSS", "Pathfinding", "BFS", "DFS", "Visualization"],
    "modules": [
        {
            "heading": "Overview",
            "contents": [
                "This project provides an interactive visualization of pathfinding algorithms—Breadth-First Search (BFS) and Depth-First Search (DFS). Users can generate a grid, set start and end points, and watch the algorithms navigate through obstacles to find a path. It emphasizes algorithmic behavior and performance through visual feedback."
            ]
        },
        {
            "heading": "Features",
            "contents": [
                "**1. Grid Generation**: Dynamically creates grids based on user inputs for dimensions.",
                "**2. Obstacle Simulation**: Randomly blocks cells to mimic real-world constraints.",
                "**3. Start & End Point Selection**: Interactive selection of start and end points within the grid.",
                "**4. Pathfinding Algorithms**: Implements BFS for shortest pathfinding and DFS for exploring paths.",
                "**5. Visualization**: Uses CSS to visually differentiate visited nodes, blocked cells, and the final path.",
                "**6. Logging**: Outputs algorithm progress and results in the terminal."
            ]
        },
        {
            "heading": "Algorithms Implemented",
            "contents": [
                "**Breadth-First Search (BFS)**: Explores nodes level by level using a queue, ensuring the shortest path in unweighted grids.",
                "**Depth-First Search (DFS)**: Explores as far as possible along a branch before backtracking, using a stack or recursion."
            ]
        },
        {
            "heading": "Screenshots",
            "contents": [
                {
                    "type": "images",
                    "items": [
                        { "src": "https://github.com/user-attachments/assets/877909f7-cf45-4a1e-aa15-263913faaedf", "alt": "Grid with obstacles" },
                        { "src": "https://github.com/user-attachments/assets/74d8e932-5524-4b7e-9108-7b308258dfad", "alt": "Pathfinding in progress" },
                        { "src": "https://github.com/user-attachments/assets/45d6fb03-216c-459b-b431-33b070c3272d", "alt": "Final path found" },
                        { "src": "https://github.com/user-attachments/assets/f2c66e74-3cd5-4809-9b9f-94734941cc5b", "alt": "Algorithm comparison" }
                    ]
                }
            ]
        },
        {
            "heading": "Key Achievements",
            "contents": [
                "- Successfully visualized BFS and DFS algorithms in action.",
                "- Enhanced user engagement through interactive grid manipulation.",
                "- Provided insights into algorithmic efficiency and behavior."
            ]
        }
    ],
    "link": "https://sangeet1997.github.io/maze_visualizaiton/",
    "github": "https://github.com/Sangeet1997/maze_visualizaiton"
  },
  {
    "id": 7,
    "title": "Agile Simulation Exercise for App Design",
    "description": "Participated in an Agile simulation exercise to design an app using Figma, demonstrating teamwork, adaptability, and Agile facilitation skills.",
    "image": agileCover,
    "tags": ["Agile", "Scrum", "Figma", "Trello", "Team Collaboration", "Sprint Planning"],
    "modules": [
      {
        "heading": "Overview",
        "contents": [
          "Engaged in a three-hour Agile simulation exercise as part of an Agile Methodologies course. The team consisted of five members: three developers, one Scrum Master, and one Project Manager. The objective was to deliver a functional app design using Figma or a similar platform. The simulation was divided into three sprint sessions, with requirements gathered by the Project Manager and relayed to the developers through the Scrum Master."
        ]
      },
      {
        "heading": "My Role and Contributions",
        "contents": [
          "Initially participated as one of the developers but later assumed additional responsibilities due to gaps in Scrum Master's involvement.",
          "Set up and maintained a Trello board for task tracking, leveraging prior experience to ensure transparency and efficiency in workflow management.",
          "Facilitated sprint planning, task allocation, and progress tracking across all three sessions."
        ]
      },
      {
        "heading": "Project Highlights:",
        "contents": [
          "**1. Agile Workflow Implementation**",
          "Structured the team's workflow using Trello, ensuring clear visibility of tasks and deadlines.",
          "**2. Adaptability**",
          "Stepped into a facilitation role to address gaps in team coordination, demonstrating initiative and leadership.",
          "**3. Collaboration**",
          "Worked closely with team members to address challenges and deliver a high-quality app design within the given timeframe."
        ]
      },
      {
        "heading": "Key Achievements:",
        "contents": [
          "Successfully delivered the app design within the three-hour simulation.",
          "Earned full marks for the exercise due to effective collaboration and adherence to Agile principles.",
          "Demonstrated strong problem-solving skills by addressing workflow inefficiencies."
        ]
      },
      {
        "heading": "",
        "contents": [
          "This project showcased my ability to adapt to dynamic team environments, take initiative, and apply Agile methodologies effectively in a time-constrained setting."
        ]
      }
    ],
    "link": "",
    "github": ""
    }

];

export default function Projects() {
  return (
    <PageTransition>
      <div className="py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/personal_portfolio/projects/${project.id}`}>
              <a className="cursor-pointer">
                <ProjectCard {...project} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}