export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced'
export type CourseCategory = 'Operating System' | 'Cloud' | 'DevOps' | 'Scriptings'

export interface CourseModule {
  id: string
  title: string
  chips?: string[]
  topics: string[]
}

export interface Course {
  id: string
  slug: string
  title: string
  category: CourseCategory
  blurb: string
  level: CourseLevel
  duration: string
  mode: string
  prerequisites: string
  overview: string
  outcomes: string[]
  whoFor: string[]
  modules: CourseModule[]
  labs: string[]
  certification: string
  faqs: { question: string; answer: string }[]
  featured?: boolean
}

export const courses: Course[] = [
  {
    id: 'redhat-linux',
    slug: 'redhat-linux',
    title: 'Redhat Linux',
    category: 'Operating System',
    blurb:
      "Master core Linux commands, admin, networking, storage, and troubleshooting on Red Hat enterprise servers.",
    level: 'Intermediate',
    duration: '8 weeks',
    mode: 'Online/Hybrid',
    prerequisites: 'Basic computer knowledge',
    overview:
      "This comprehensive Red Hat Linux course takes you from basic commands to advanced system administration.",
    outcomes: [
      'Master essential Linux CLI commands and utilities',
      'Configure and manage enterprise servers',
      'Implement networking, storage, and security solutions',
      'Automate tasks and troubleshoot complex issues',
      'Prepare for RHCSA/RHCE certification exams',
    ],
    whoFor: [
      'System administrators beginning their Linux journey',
      'IT professionals transitioning to Linux environments',
      'DevOps engineers needing solid Linux foundations',
      'Students preparing for Red Hat certifications',
    ],
    modules: [
      {
        id: 'module-a',
        title: 'Basic Linux',
        chips: ['CLI', 'Essentials'],
        topics: [
          'Essential commands: cat, touch, rm, rm -r, vi, chmod, find',
          'File and directory operations',
          'Filters and editors',
        ],
      },
      {
        id: 'module-b',
        title: 'Administration Concepts',
        topics: [
          'Server builds: Physical, Virtual, and Cloud',
          'Filesystems & device management',
          'Boot process & runlevels',
          'User administration',
          'Networking basics',
        ],
      },
    ],
    labs: [
      'Provision a VM and configure NFS + Samba',
      'Create LVM with snapshot & expand storage',
    ],
    certification:
      "This course maps to RHCSA and RHCE certification paths.",
    faqs: [
      { question: 'Do I need prior Linux experience?', answer: 'Basic computer knowledge is sufficient.' },
      { question: 'Will I get hands-on practice?', answer: 'Yes, the course includes extensive lab work.' },
    ],
    featured: true,
  },
  {
    id: 'gcp',
    slug: 'gcp',
    title: 'Google Cloud Platform (GCP)',
    category: 'Cloud',
    blurb:
      'From console to kubectl—compute, storage, IAM, networking, GKE, Cloud Run, and observability.',
    level: 'Intermediate',
    duration: '10 weeks',
    mode: 'Online',
    prerequisites: 'Basic cloud concepts, Linux fundamentals',
    overview:
      "Master Google Cloud Platform from fundamentals to advanced services. Learn compute, storage, networking, and serverless.",
    outcomes: [
      'Navigate and manage GCP Console and Cloud Shell',
      'Deploy and scale compute resources with GCE',
      'Design secure networks with VPC and load balancing',
      'Orchestrate containers with GKE',
      'Build serverless applications with Cloud Run',
    ],
    whoFor: [
      'Cloud engineers transitioning to GCP',
      'DevOps professionals managing cloud infrastructure',
      'Solutions architects designing GCP systems',
    ],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction to Google Cloud',
        chips: ['Fundamentals', 'Setup'],
        topics: [
          'Cloud computing basics and benefits',
          'Creating a free GCP account',
          'Console and Cloud Shell navigation',
        ],
      },
      {
        id: 'module-2',
        title: 'Compute Engine',
        chips: ['VMs', 'Scaling'],
        topics: [
          'GCE virtual machines overview',
          'Machine types and disks',
          'Autoscaling configurations',
        ],
      },
    ],
    labs: [
      'Launch managed instance group with load balancer',
      'Deploy GKE cluster with rolling updates',
    ],
    certification: 'Prepares for Google Cloud ACE and PCA certifications.',
    faqs: [
      { question: 'Is GCP experience required?', answer: 'No, basic cloud concepts help.' },
      { question: 'Do I need to know Kubernetes?', answer: 'No, we cover K8s fundamentals in the course.' },
    ],
    featured: true,
  },
  {
    id: 'docker',
    slug: 'docker',
    title: 'Docker Containers',
    category: 'DevOps',
    blurb: 'Containerization from scratch—build, ship, and run applications anywhere with Docker.',
    level: 'Beginner',
    duration: '4 weeks',
    mode: 'Online',
    prerequisites: 'Basic Linux commands',
    overview:
      'Learn containerization with Docker from fundamentals to production deployments.',
    outcomes: [
      'Understand containerization concepts',
      'Build and optimize Docker images',
      'Manage containers and networks',
    ],
    whoFor: ['Developers', 'DevOps engineers', 'System administrators'],
    modules: [
      { id: 'docker-1', title: 'Docker Fundamentals', topics: ['Docker vs VMs', 'Architecture', 'Install Docker'] },
      { id: 'docker-2', title: 'Images & Containers', topics: ['Dockerfile', 'Layers', 'Best practices'] },
    ],
    labs: ['Containerize a web application'],
    certification: 'Foundation for DCA and Kubernetes certifications.',
    faqs: [],
    featured: true,
  },
  {
    id: 'azure',
    slug: 'azure',
    title: 'Microsoft Azure',
    category: 'Cloud',
    blurb: 'Core Azure services: compute, storage, networking, IAM, AKS, and serverless.',
    level: 'Intermediate',
    duration: '8 weeks',
    mode: 'Online',
    prerequisites: 'Cloud fundamentals and basic Linux',
    overview: 'Learn Azure building blocks and deploy secure, scalable infrastructure and apps.',
    outcomes: ['Deploy VMs and Scale Sets', 'Design VNets and load balancers', 'Work with AKS and Functions'],
    whoFor: ['Cloud engineers', 'DevOps engineers', 'Sysadmins'],
    modules: [
      { id: 'az-1', title: 'Azure Fundamentals', topics: ['Subscriptions', 'Resource Groups', 'Portal/CLI'] },
      { id: 'az-2', title: 'Compute & Networking', topics: ['VMs', 'VNets', 'Load Balancing'] },
    ],
    labs: ['Deploy a multi-tier app on Azure'],
    certification: 'Good preparation for AZ-104 and AZ-305.',
    faqs: [],
    featured: true,
  },
  {
    id: 'aws',
    slug: 'aws',
    title: 'Amazon Web Services (AWS)',
    category: 'Cloud',
    blurb: 'Build on AWS with EC2, S3, IAM, VPC, ECS/EKS, and serverless fundamentals.',
    level: 'Intermediate',
    duration: '8 weeks',
    mode: 'Online',
    prerequisites: 'Basic cloud concepts and Linux',
    overview: 'Hands-on AWS from foundations to container and serverless workloads.',
    outcomes: ['Design secure VPCs', 'Automate with IAM roles and policies', 'Run containers on ECS/EKS'],
    whoFor: ['Developers', 'Cloud engineers', 'DevOps'],
    modules: [
      { id: 'aws-1', title: 'Core Services', topics: ['EC2', 'S3', 'IAM'] },
      { id: 'aws-2', title: 'Networking & Containers', topics: ['VPC', 'ECS', 'EKS'] },
    ],
    labs: ['Deploy a containerized app to ECS Fargate'],
    certification: 'Prepares for AWS SAA and DVA.',
    faqs: [],
  },
  {
    id: 'kubernetes',
    slug: 'kubernetes',
    title: 'Kubernetes (K8s)',
    category: 'DevOps',
    blurb: 'Operate Kubernetes clusters, workloads, networking, storage, and security.',
    level: 'Intermediate',
    duration: '6 weeks',
    mode: 'Online',
    prerequisites: 'Docker and Linux basics',
    overview: 'From kubectl basics to production-grade cluster operations and GitOps.',
    outcomes: ['Deploy workloads', 'Manage services and ingress', 'Handle storage and RBAC'],
    whoFor: ['Platform engineers', 'DevOps', 'SREs'],
    modules: [
      { id: 'k8s-1', title: 'Core Objects', topics: ['Pods', 'Deployments', 'Services'] },
      { id: 'k8s-2', title: 'Operations', topics: ['Ingress', 'RBAC', 'Helm'] },
    ],
    labs: ['Expose a microservice via Ingress on a managed cluster'],
    certification: 'CKA/CKAD-aligned coverage.',
    faqs: [],
    featured: true,
  },
  {
    id: 'terraform',
    slug: 'terraform',
    title: 'Terraform Infrastructure as Code',
    category: 'DevOps',
    blurb: 'Provision cloud infrastructure declaratively with Terraform and modules.',
    level: 'Intermediate',
    duration: '5 weeks',
    mode: 'Online',
    prerequisites: 'Cloud provider basics',
    overview: 'Author reusable modules, manage state, and build CI/CD for IaC.',
    outcomes: ['Author modules', 'Manage remote state', 'Automate plans and applies'],
    whoFor: ['Cloud/DevOps engineers'],
    modules: [
      { id: 'tf-1', title: 'Terraform Basics', topics: ['Providers', 'State', 'Modules'] },
      { id: 'tf-2', title: 'Workflows', topics: ['Workspaces', 'CI/CD', 'Policies'] },
    ],
    labs: ['Create a reusable VPC module and consume it in environments'],
    certification: 'Maps to HashiCorp Terraform Associate.',
    faqs: [],
  },
  {
    id: 'ansible',
    slug: 'ansible',
    title: 'Ansible Automation',
    category: 'DevOps',
    blurb: 'Automate provisioning and configuration with Ansible playbooks and roles.',
    level: 'Intermediate',
    duration: '4 weeks',
    mode: 'Online',
    prerequisites: 'Linux and SSH basics',
    overview: 'From ad-hoc commands to reusable roles and Ansible collections.',
    outcomes: ['Write playbooks', 'Build roles', 'Manage inventories and variables'],
    whoFor: ['Sysadmins', 'DevOps'],
    modules: [
      { id: 'ans-1', title: 'Playbooks & Inventories', topics: ['YAML', 'Variables', 'Conditionals'] },
      { id: 'ans-2', title: 'Roles & Collections', topics: ['Roles', 'Galaxy', 'Best Practices'] },
    ],
    labs: ['Automate multi-node web stack provisioning'],
    certification: 'Good base for Red Hat Ansible Automation.',
    faqs: [],
  },
  {
    id: 'jenkins',
    slug: 'jenkins',
    title: 'Jenkins CI/CD',
    category: 'DevOps',
    blurb: 'Build robust pipelines with Jenkins, shared libraries, and agents.',
    level: 'Beginner',
    duration: '4 weeks',
    mode: 'Online',
    prerequisites: 'Git and basic scripting',
    overview: 'Install Jenkins, create declarative pipelines, and integrate with containers and clouds.',
    outcomes: ['Write declarative pipelines', 'Use shared libraries', 'Build and deploy via agents'],
    whoFor: ['Developers', 'DevOps'],
    modules: [
      { id: 'jen-1', title: 'Getting Started', topics: ['Setup', 'Plugins', 'Agents'] },
      { id: 'jen-2', title: 'Pipelines', topics: ['Declarative', 'Libraries', 'Credentials'] },
    ],
    labs: ['Create a CI pipeline for a containerized app'],
    certification: 'Covers common Jenkins workflows.',
    faqs: [],
  },
  {
    id: 'git',
    slug: 'git',
    title: 'Git Version Control',
    category: 'DevOps',
    blurb: 'Master Git branching, merging, rebasing, and collaborative workflows.',
    level: 'Beginner',
    duration: '2 weeks',
    mode: 'Online',
    prerequisites: 'None',
    overview: 'Effective version control using Git and GitHub/GitLab platforms.',
    outcomes: ['Use branching strategies', 'Resolve conflicts', 'Manage pull requests'],
    whoFor: ['Everyone working with code'],
    modules: [
      { id: 'git-1', title: 'Essentials', topics: ['Commits', 'Branches', 'Merges'] },
      { id: 'git-2', title: 'Advanced', topics: ['Rebase', 'Cherry-pick', 'Submodules'] },
    ],
    labs: ['Implement GitFlow for a demo project'],
    certification: 'N/A',
    faqs: [],
  },
  {
    id: 'github-actions',
    slug: 'github-actions',
    title: 'GitHub Actions',
    category: 'DevOps',
    blurb: 'Automate build and deploy workflows with GitHub Actions.',
    level: 'Beginner',
    duration: '3 weeks',
    mode: 'Online',
    prerequisites: 'Git basics',
    overview: 'Create reusable workflows, manage runners, and secure CI/CD pipelines.',
    outcomes: ['Build reusable actions', 'Use matrix builds', 'Secure secrets'],
    whoFor: ['Developers', 'DevOps'],
    modules: [
      { id: 'gha-1', title: 'Workflows', topics: ['Triggers', 'Jobs', 'Runners'] },
      { id: 'gha-2', title: 'Delivery', topics: ['Artifacts', 'Environments', 'Approvals'] },
    ],
    labs: ['Deploy to cloud using Actions and OIDC'],
    certification: 'N/A',
    faqs: [],
  },
  {
    id: 'python',
    slug: 'python',
    title: 'Python Programming',
    category: 'Scriptings',
    blurb: 'Write clean Python code for automation, data tasks, and web APIs.',
    level: 'Beginner',
    duration: '6 weeks',
    mode: 'Online',
    prerequisites: 'Basic computer knowledge',
    overview: 'Syntax, data structures, functions, OOP, and practical automation scripts.',
    outcomes: ['Build CLI tools', 'Work with files/APIs', 'Understand OOP'],
    whoFor: ['Beginners', 'Automation engineers'],
    modules: [
      { id: 'py-1', title: 'Core Python', topics: ['Syntax', 'Collections', 'Functions'] },
      { id: 'py-2', title: 'OOP & Automation', topics: ['Classes', 'Requests', 'Scripting'] },
    ],
    labs: ['Automate a reporting workflow'],
    certification: 'N/A',
    faqs: [],
    featured: true,
  },
  {
    id: 'bash',
    slug: 'bash',
    title: 'Bash/Shell Scripting',
    category: 'Scriptings',
    blurb: 'Automate Linux tasks using Bash, grep/sed/awk, and cron.',
    level: 'Beginner',
    duration: '3 weeks',
    mode: 'Online',
    prerequisites: 'Basic Linux commands',
    overview: 'Write robust shell scripts with functions, arrays, and error handling.',
    outcomes: ['Create reusable scripts', 'Parse logs', 'Schedule jobs'],
    whoFor: ['Sysadmins', 'Beginners'],
    modules: [
      { id: 'bash-1', title: 'Shell Basics', topics: ['Variables', 'Control flow', 'Funcs'] },
      { id: 'bash-2', title: 'Text & Jobs', topics: ['sed/awk', 'grep', 'cron'] },
    ],
    labs: ['Build a backup and rotate script suite'],
    certification: 'N/A',
    faqs: [],
  },
  {
    id: 'powershell',
    slug: 'powershell',
    title: 'PowerShell Scripting',
    category: 'Scriptings',
    blurb: 'Automate Windows and cloud administration with PowerShell.',
    level: 'Beginner',
    duration: '3 weeks',
    mode: 'Online',
    prerequisites: 'Basic Windows administration',
    overview: 'Cmdlets, pipelines, modules, and remoting with practical admin tasks.',
    outcomes: ['Write robust scripts', 'Manage systems remotely', 'Work with JSON and REST APIs'],
    whoFor: ['Windows admins', 'Cloud engineers'],
    modules: [
      { id: 'ps-1', title: 'Language Basics', topics: ['Cmdlets', 'Pipelines', 'Functions'] },
      { id: 'ps-2', title: 'Admin Automation', topics: ['Modules', 'Remoting', 'REST'] },
    ],
    labs: ['Automate user and resource provisioning'],
    certification: 'N/A',
    faqs: [],
  },
]

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug)
}

export function getFeaturedCourses(): Course[] {
  return courses.filter((c) => c.featured)
}

export function getCoursesByCategory(category: CourseCategory): Course[] {
  return courses.filter((c) => c.category === category)
}

export const categories: CourseCategory[] = ['Operating System', 'Cloud', 'DevOps', 'Scriptings']
