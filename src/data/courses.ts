export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type CourseCategory = 'Operating System' | 'Cloud' | 'DevOps' | 'Scriptings';

export interface CourseModule {
  id: string;
  title: string;
  chips?: string[];
  topics: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: CourseCategory;
  blurb: string;
  level: CourseLevel;
  duration: string;
  mode: string;
  prerequisites: string;
  overview: string;
  outcomes: string[];
  whoFor: string[];
  modules: CourseModule[];
  labs: string[];
  certification: string;
  faqs: { question: string; answer: string }[];
  featured?: boolean;
}

export const courses: Course[] = [
  {
    id: 'redhat-linux',
    slug: 'redhat-linux',
    title: 'Redhat Linux',
    category: 'Operating System',
    blurb: 'Master core Linux commands, admin, networking, storage, and troubleshooting on Red Hat enterprise servers.',
    level: 'Intermediate',
    duration: '8 weeks',
    mode: 'Online/Hybrid',
    prerequisites: 'Basic computer knowledge',
    overview: 'This comprehensive Red Hat Linux course takes you from basic commands to advanced system administration. You\'ll gain hands-on experience with enterprise-grade Linux systems, learning everything from file management to performance monitoring and cross-team workflows.',
    outcomes: [
      'Master essential Linux CLI commands and utilities',
      'Configure and manage enterprise servers (Physical/Virtual/Cloud)',
      'Implement networking, storage, and security solutions',
      'Automate tasks and troubleshoot complex issues',
      'Prepare for RHCSA/RHCE certification exams'
    ],
    whoFor: [
      'System administrators beginning their Linux journey',
      'IT professionals transitioning to Linux environments',
      'DevOps engineers needing solid Linux foundations',
      'Students preparing for Red Hat certifications'
    ],
    modules: [
      {
        id: 'module-a',
        title: 'Basic Linux',
        chips: ['CLI', 'Essentials'],
        topics: [
          'Essential commands: cat, touch, rm, rm -r, vi, chmod, find',
          'File and directory operations',
          'Simple and advanced filters',
          'Text editors and file permissions',
          'Finding and locating files'
        ]
      },
      {
        id: 'module-b',
        title: 'Administration Concepts',
        topics: [
          'Server builds: Physical, Virtual, and Cloud',
          'Data center setup: location, racks, power, cooling',
          'HP Blade & Enclosure architecture',
          'Filesystems & device management',
          'Boot process & runlevels explained',
          'GRUB troubleshooting and recovery',
          'User administration & root password reset',
          'Swap space configuration',
          'Software management: RPM and YUM',
          'Service management and control',
          'Networking: IPs, routers, configuration files',
          'Network tools: telnet, ping, ftp, ssh',
          'IP bonding for redundancy',
          'NFS (Network File System) setup',
          'Backup strategies and implementation',
          'Automation with cron and at',
          'Samba file sharing',
          'Sendmail configuration',
          'System logs and kernel parameters',
          'Kdump for crash analysis',
          'LVM (Logical Volume Manager)',
          'Storage: LUN add and expand',
          'System patching procedures',
          'ITIL framework basics',
          'Performance monitoring and tuning',
          'Cross-team workflows',
          'Console information management',
          'Ticketing tools & vendor collaboration',
          'RCA (Root Cause Analysis) training',
          'Offline diagnostics process'
        ]
      }
    ],
    labs: [
      'Provision a VM and configure NFS + Samba file sharing',
      'Create LVM with snapshot & expand LUN storage',
      'Automate backup with cron + sendmail notifications',
      'Troubleshoot boot issues and recover GRUB',
      'Implement IP bonding and test failover'
    ],
    certification: 'This course maps directly to RHCSA (Red Hat Certified System Administrator) and RHCE (Red Hat Certified Engineer) certification paths. You\'ll be prepared to take both certification exams upon completion.',
    faqs: [
      {
        question: 'Do I need prior Linux experience?',
        answer: 'Basic computer knowledge is sufficient. We start with fundamentals and progressively build to advanced topics.'
      },
      {
        question: 'Will I get hands-on practice?',
        answer: 'Yes! The course includes extensive lab work with real VMs and enterprise scenarios.'
      },
      {
        question: 'How does this prepare me for RHCSA?',
        answer: 'Our curriculum covers 100% of RHCSA exam objectives plus additional enterprise skills.'
      },
      {
        question: 'What support is available during the course?',
        answer: 'You\'ll have access to instructor support, peer forums, and recorded sessions for review.'
      },
      {
        question: 'Can I access course materials after completion?',
        answer: 'Yes, you retain lifetime access to all course materials and updates.'
      }
    ],
    featured: true
  },
  {
    id: 'gcp',
    slug: 'gcp',
    title: 'Google Cloud Platform (GCP)',
    category: 'Cloud',
    blurb: 'From console to kubectl—compute, storage, IAM, networking, GKE, Cloud Run, and observability.',
    level: 'Intermediate',
    duration: '10 weeks',
    mode: 'Online',
    prerequisites: 'Basic cloud concepts, Linux fundamentals',
    overview: 'Master Google Cloud Platform from fundamentals to advanced services. This course covers compute, storage, networking, containers, and modern application deployment patterns. You\'ll learn to architect, deploy, and manage cloud infrastructure at scale.',
    outcomes: [
      'Navigate and manage GCP Console and Cloud Shell',
      'Deploy and scale compute resources with GCE',
      'Design secure networks with VPC, firewall, and load balancing',
      'Orchestrate containers with GKE (Google Kubernetes Engine)',
      'Build serverless applications with Cloud Run and Functions',
      'Implement monitoring, logging, and observability'
    ],
    whoFor: [
      'Cloud engineers transitioning to GCP',
      'DevOps professionals managing cloud infrastructure',
      'Solutions architects designing GCP systems',
      'Developers deploying applications to the cloud'
    ],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction to Google Cloud',
        chips: ['Fundamentals', 'Setup'],
        topics: [
          'Cloud computing basics and benefits',
          'GCP vs AWS vs Azure comparison',
          'Creating a free GCP account',
          'Console and Cloud Shell navigation',
          'GCP vocabulary and terminology',
          'Resource hierarchy: projects, folders, organizations'
        ]
      },
      {
        id: 'module-2',
        title: 'Compute Engine',
        chips: ['VMs', 'Scaling'],
        topics: [
          'GCE virtual machines overview',
          'Marketplace and pre-built images',
          'Pricing models: sustained, committed, preemptible, spot',
          'Machine types and families',
          'Persistent disks, SSD, and Filestore',
          'Autoscaling configurations',
          'Custom images and snapshots',
          'Instance templates and groups'
        ]
      },
      {
        id: 'module-3',
        title: 'Object Storage',
        chips: ['Cloud Storage'],
        topics: [
          'Storage classes and use cases',
          'Bucket creation and management',
          'Object versioning',
          'Lifecycle management policies',
          'Encryption at rest and in transit',
          'Access control and IAM integration'
        ]
      },
      {
        id: 'module-4',
        title: 'Resources & Access Management',
        chips: ['IAM', 'Security'],
        topics: [
          'IAM policies and principles',
          'Roles: primitive, predefined, custom',
          'Service accounts and keys',
          'Cloud Identity integration',
          'Console, SDK, APIs, and Mobile app',
          'Best practices for access management'
        ]
      },
      {
        id: 'module-5',
        title: 'Networking',
        chips: ['VPC', 'Load Balancing'],
        topics: [
          'VPC networks and subnets',
          'Routes and routing tables',
          'Firewall rules and policies',
          'VPC peering and shared VPC',
          'Load balancing types and configurations',
          'Cloud DNS and domain management',
          'Cloud CDN for content delivery'
        ]
      },
      {
        id: 'module-6',
        title: 'Database Storage',
        chips: ['Cloud SQL'],
        topics: [
          'Cloud SQL overview',
          'MySQL, PostgreSQL, and SQL Server',
          'High availability and backups',
          'Scaling and performance tuning',
          'Connection methods and security'
        ]
      },
      {
        id: 'module-7',
        title: 'Containers & Kubernetes',
        chips: ['GKE', 'Docker'],
        topics: [
          'Container fundamentals',
          'Kubernetes basics and architecture',
          'GKE: Autopilot vs Standard',
          'kubectl operations and commands',
          'Deployments, services, and ingress',
          'ConfigMaps and secrets',
          'Monitoring and logging for containers'
        ]
      },
      {
        id: 'module-8',
        title: 'Application Services',
        chips: ['Serverless'],
        topics: [
          'Cloud Run: containerized serverless',
          'Cloud Functions: event-driven compute',
          'Comparing compute options',
          'CI/CD integration',
          'Scaling and cold starts'
        ]
      },
      {
        id: 'module-9',
        title: 'Integration & Observability',
        chips: ['Monitoring', 'Integration'],
        topics: [
          'Secret Manager for sensitive data',
          'Pub/Sub messaging patterns',
          'Cloud Scheduler for cron jobs',
          'Cloud Logging and log analysis',
          'Cloud Monitoring and alerting',
          'API management and integration'
        ]
      }
    ],
    labs: [
      'Launch autoscaling managed instance group with load balancer',
      'Deploy GKE cluster with rolling updates and health checks',
      'Build Pub/Sub + Cloud Run event-driven pipeline',
      'Configure VPC with custom subnets and firewall rules',
      'Implement Cloud SQL with automated backups and replicas'
    ],
    certification: 'Prepares you for Google Cloud Associate Cloud Engineer and Professional Cloud Architect certifications.',
    faqs: [
      {
        question: 'Is GCP experience required?',
        answer: 'No, but basic cloud concepts and Linux fundamentals are helpful.'
      },
      {
        question: 'Will I get free GCP credits?',
        answer: 'Yes, we provide guidance on accessing Google Cloud\'s free tier and trial credits.'
      },
      {
        question: 'What\'s the difference between this and AWS?',
        answer: 'While concepts overlap, this course focuses specifically on GCP services, UI, and best practices.'
      },
      {
        question: 'Do I need to know Kubernetes?',
        answer: 'No, we cover Kubernetes fundamentals as part of the GKE module.'
      },
      {
        question: 'Can I use this for certification prep?',
        answer: 'Absolutely! The course aligns with Google Cloud certification paths.'
      }
    ],
    featured: true
  },
  {
    id: 'azure',
    slug: 'azure',
    title: 'Microsoft Azure',
    category: 'Cloud',
    blurb: 'Plan, deploy, and operate on Microsoft Azure—VMs, storage, networking, RBAC, monitoring, and backup.',
    level: 'Intermediate',
    duration: '10 weeks',
    mode: 'Online/Hybrid',
    prerequisites: 'Basic cloud knowledge, Windows/Linux basics',
    overview: 'Comprehensive Microsoft Azure training covering core services, identity management, networking, storage, and enterprise solutions. Learn to architect and manage Azure infrastructure for real-world applications.',
    outcomes: [
      'Navigate Azure Portal and use Azure CLI',
      'Deploy and manage virtual machines and app services',
      'Configure virtual networks and security',
      'Implement Azure AD and RBAC',
      'Set up monitoring, backup, and disaster recovery',
      'Prepare for Azure certification exams'
    ],
    whoFor: [
      'IT professionals entering cloud computing',
      'System administrators moving to Azure',
      'Solutions architects designing Azure solutions',
      'Microsoft-focused enterprise teams'
    ],
    modules: [
      {
        id: 'azure-1',
        title: 'Azure Fundamentals',
        topics: [
          'Cloud computing concepts',
          'Azure portal and resource management',
          'Subscriptions and resource groups',
          'Azure CLI and PowerShell',
          'Regions and availability zones'
        ]
      },
      {
        id: 'azure-2',
        title: 'Compute Services',
        topics: [
          'Virtual Machines: creation and management',
          'VM sizing and pricing',
          'App Services and Web Apps',
          'Azure Functions serverless',
          'Container Instances and AKS'
        ]
      },
      {
        id: 'azure-3',
        title: 'Storage Solutions',
        topics: [
          'Blob Storage and access tiers',
          'File Storage and File Sync',
          'Disk Storage for VMs',
          'Storage accounts and replication',
          'Data Lake Storage'
        ]
      },
      {
        id: 'azure-4',
        title: 'Networking',
        topics: [
          'Virtual Networks (VNets)',
          'Subnets and IP addressing',
          'Network Security Groups',
          'Azure Firewall and DDoS protection',
          'Load Balancer and Application Gateway',
          'VPN Gateway and ExpressRoute'
        ]
      },
      {
        id: 'azure-5',
        title: 'Identity & Access',
        topics: [
          'Azure Active Directory (Azure AD)',
          'Users, groups, and roles',
          'RBAC (Role-Based Access Control)',
          'Managed identities',
          'Multi-factor authentication'
        ]
      },
      {
        id: 'azure-6',
        title: 'Monitoring & Management',
        topics: [
          'Azure Monitor and metrics',
          'Log Analytics',
          'Application Insights',
          'Alerts and action groups',
          'Azure Automation'
        ]
      }
    ],
    labs: [
      'Deploy multi-tier application with VMs and load balancer',
      'Configure VNet peering and VPN connectivity',
      'Implement RBAC and conditional access policies',
      'Set up Azure Monitor with custom dashboards',
      'Create backup and disaster recovery plan'
    ],
    certification: 'Aligns with Microsoft Azure Fundamentals (AZ-900) and Azure Administrator (AZ-104) certifications.',
    faqs: [
      {
        question: 'Is this suitable for AWS users?',
        answer: 'Yes! We highlight key differences and help you translate AWS concepts to Azure.'
      },
      {
        question: 'Do I need a Microsoft account?',
        answer: 'Yes, and we\'ll guide you through setting up a free Azure trial.'
      },
      {
        question: 'What about Azure DevOps?',
        answer: 'Basic Azure DevOps is covered; we offer a separate advanced DevOps course.'
      },
      {
        question: 'Will I learn PowerShell?',
        answer: 'Yes, we cover both Azure CLI and PowerShell for automation.'
      },
      {
        question: 'How current is the course content?',
        answer: 'Updated quarterly to reflect the latest Azure features and best practices.'
      }
    ],
    featured: true
  },
  {
    id: 'aws',
    slug: 'aws',
    title: 'Amazon Web Services (AWS)',
    category: 'Cloud',
    blurb: 'Comprehensive AWS training—EC2, S3, VPC, IAM, Lambda, RDS, and cloud architecture.',
    level: 'Intermediate',
    duration: '10 weeks',
    mode: 'Online',
    prerequisites: 'Basic cloud concepts, Linux fundamentals',
    overview: 'Master Amazon Web Services with this comprehensive course covering core services, networking, security, and serverless architectures. Build production-ready cloud solutions on the world\'s leading cloud platform.',
    outcomes: [
      'Architect scalable AWS infrastructure',
      'Manage compute with EC2 and Auto Scaling',
      'Implement secure networking with VPC',
      'Deploy serverless applications with Lambda',
      'Configure storage with S3, EBS, and RDS',
      'Pass AWS certification exams'
    ],
    whoFor: [
      'Cloud engineers starting with AWS',
      'DevOps teams managing AWS infrastructure',
      'Solutions architects designing AWS systems',
      'Developers deploying to AWS'
    ],
    modules: [
      {
        id: 'aws-1',
        title: 'AWS Fundamentals',
        topics: [
          'Cloud computing with AWS',
          'AWS Management Console',
          'Regions, availability zones, edge locations',
          'AWS CLI and SDK',
          'Free tier and pricing'
        ]
      },
      {
        id: 'aws-2',
        title: 'Compute Services',
        topics: [
          'EC2 instances and AMIs',
          'Instance types and pricing',
          'Auto Scaling groups',
          'Elastic Load Balancing',
          'Lambda serverless functions',
          'Elastic Beanstalk'
        ]
      },
      {
        id: 'aws-3',
        title: 'Storage Services',
        topics: [
          'S3 buckets and storage classes',
          'EBS volumes and snapshots',
          'EFS file systems',
          'Storage Gateway',
          'Glacier for archival'
        ]
      },
      {
        id: 'aws-4',
        title: 'Networking & Content Delivery',
        topics: [
          'VPC: subnets, route tables, internet gateways',
          'Security groups and NACLs',
          'VPC peering and Transit Gateway',
          'Route 53 DNS',
          'CloudFront CDN'
        ]
      },
      {
        id: 'aws-5',
        title: 'Database Services',
        topics: [
          'RDS: MySQL, PostgreSQL, Aurora',
          'DynamoDB NoSQL',
          'ElastiCache for caching',
          'Database migration',
          'Backup and recovery'
        ]
      },
      {
        id: 'aws-6',
        title: 'Security & IAM',
        topics: [
          'IAM users, groups, roles',
          'Policies and permissions',
          'MFA and security best practices',
          'KMS for encryption',
          'AWS Organizations'
        ]
      }
    ],
    labs: [
      'Build 3-tier web application with EC2, RDS, and ELB',
      'Configure VPC with public and private subnets',
      'Deploy serverless API with Lambda and API Gateway',
      'Implement S3 website with CloudFront CDN',
      'Set up automated backups and disaster recovery'
    ],
    certification: 'Prepares you for AWS Certified Solutions Architect Associate and Developer Associate certifications.',
    faqs: [
      {
        question: 'How is this different from GCP or Azure courses?',
        answer: 'While cloud concepts are similar, this course focuses exclusively on AWS services and architecture patterns.'
      },
      {
        question: 'Will I need to pay for AWS resources?',
        answer: 'Most labs use free tier resources. We provide cost optimization guidance for minimal expenses.'
      },
      {
        question: 'Is coding required?',
        answer: 'Basic scripting helps but isn\'t required. We cover CLI commands and simple Lambda functions.'
      },
      {
        question: 'Can I get AWS certification after this?',
        answer: 'Yes! The course covers all exam objectives for Solutions Architect Associate.'
      },
      {
        question: 'How often is content updated?',
        answer: 'We update course materials quarterly as AWS releases new services and features.'
      }
    ],
    featured: false
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
    overview: 'Learn containerization with Docker from fundamentals to production deployments. Understand images, containers, networking, volumes, and Docker Compose for multi-container applications.',
    outcomes: [
      'Understand containerization concepts',
      'Build and optimize Docker images',
      'Manage containers and networks',
      'Use Docker Compose for multi-container apps',
      'Deploy containerized applications',
      'Implement security best practices'
    ],
    whoFor: [
      'Developers adopting containerization',
      'DevOps engineers learning Docker',
      'System administrators modernizing infrastructure',
      'Anyone preparing for Kubernetes'
    ],
    modules: [
      {
        id: 'docker-1',
        title: 'Docker Fundamentals',
        topics: [
          'What is containerization?',
          'Docker vs VMs',
          'Docker architecture',
          'Installing Docker',
          'Docker Hub and registries'
        ]
      },
      {
        id: 'docker-2',
        title: 'Images & Containers',
        topics: [
          'Running your first container',
          'Docker images explained',
          'Building images with Dockerfile',
          'Image layers and caching',
          'Multi-stage builds',
          'Best practices for images'
        ]
      },
      {
        id: 'docker-3',
        title: 'Networking & Volumes',
        topics: [
          'Container networking modes',
          'Port mapping',
          'Custom networks',
          'Volume types: bind mounts, volumes',
          'Data persistence',
          'Sharing data between containers'
        ]
      },
      {
        id: 'docker-4',
        title: 'Docker Compose',
        topics: [
          'Compose file format',
          'Defining multi-container applications',
          'Services, networks, volumes in Compose',
          'Environment variables',
          'Scaling services',
          'Production considerations'
        ]
      }
    ],
    labs: [
      'Containerize a Node.js web application',
      'Build optimized multi-stage Docker images',
      'Create custom network with multiple containers',
      'Deploy full-stack app with Docker Compose',
      'Implement health checks and restart policies'
    ],
    certification: 'Foundation for Docker Certified Associate (DCA) and Kubernetes certifications.',
    faqs: [
      {
        question: 'Do I need programming experience?',
        answer: 'Basic understanding helps, but we focus on Docker concepts applicable to any language.'
      },
      {
        question: 'What OS should I use?',
        answer: 'Docker works on Windows, Mac, and Linux. We provide setup guides for all.'
      },
      {
        question: 'Is this enough for Kubernetes?',
        answer: 'Docker is a prerequisite. We offer a separate Kubernetes course building on these concepts.'
      },
      {
        question: 'Will I learn Docker Swarm?',
        answer: 'We focus on Docker fundamentals and Compose. Kubernetes is the recommended orchestrator.'
      },
      {
        question: 'Can I use this in production?',
        answer: 'Yes! We cover production best practices, security, and monitoring.'
      }
    ],
    featured: true
  },
  {
    id: 'kubernetes',
    slug: 'kubernetes',
    title: 'Kubernetes (K8s)',
    category: 'DevOps',
    blurb: 'Orchestrate containers at scale—pods, deployments, services, ingress, and production K8s.',
    level: 'Advanced',
    duration: '6 weeks',
    mode: 'Online',
    prerequisites: 'Docker fundamentals, Linux basics',
    overview: 'Master Kubernetes orchestration from architecture to production deployments. Learn pods, deployments, services, networking, storage, security, and cluster management.',
    outcomes: [
      'Understand Kubernetes architecture',
      'Deploy and manage workloads',
      'Configure networking and ingress',
      'Implement persistent storage',
      'Apply security and RBAC',
      'Troubleshoot cluster issues',
      'Prepare for CKA/CKAD certifications'
    ],
    whoFor: [
      'DevOps engineers deploying containerized apps',
      'Cloud architects designing K8s solutions',
      'Platform engineers building K8s infrastructure',
      'Developers working with microservices'
    ],
    modules: [
      {
        id: 'k8s-1',
        title: 'Kubernetes Architecture',
        topics: [
          'Control plane components',
          'Worker nodes and kubelet',
          'etcd and cluster state',
          'Container runtime (containerd)',
          'kubectl CLI basics'
        ]
      },
      {
        id: 'k8s-2',
        title: 'Pods & Workloads',
        topics: [
          'Pod lifecycle and phases',
          'Deployments and ReplicaSets',
          'StatefulSets for stateful apps',
          'DaemonSets and Jobs',
          'ConfigMaps and Secrets',
          'Resource requests and limits'
        ]
      },
      {
        id: 'k8s-3',
        title: 'Networking',
        topics: [
          'Service types: ClusterIP, NodePort, LoadBalancer',
          'Ingress controllers',
          'Network policies',
          'DNS in Kubernetes',
          'Service discovery'
        ]
      },
      {
        id: 'k8s-4',
        title: 'Storage & Persistence',
        topics: [
          'Volumes and volume types',
          'PersistentVolumes and PersistentVolumeClaims',
          'StorageClasses',
          'StatefulSet storage',
          'CSI drivers'
        ]
      },
      {
        id: 'k8s-5',
        title: 'Security & RBAC',
        topics: [
          'Authentication and authorization',
          'RBAC: roles and role bindings',
          'Service accounts',
          'Pod security policies',
          'Network policies',
          'Secrets management'
        ]
      },
      {
        id: 'k8s-6',
        title: 'Operations',
        topics: [
          'Cluster installation (kubeadm)',
          'Monitoring with Prometheus',
          'Logging strategies',
          'Helm package manager',
          'GitOps with ArgoCD',
          'Troubleshooting techniques'
        ]
      }
    ],
    labs: [
      'Deploy multi-tier application with deployments and services',
      'Configure ingress with TLS termination',
      'Implement RBAC and network policies',
      'Set up Prometheus and Grafana monitoring',
      'Deploy StatefulSet with persistent storage',
      'Perform rolling updates and rollbacks'
    ],
    certification: 'Prepares for CKA (Certified Kubernetes Administrator) and CKAD (Certified Kubernetes Application Developer).',
    faqs: [
      {
        question: 'Must I complete Docker course first?',
        answer: 'Yes, Docker fundamentals are essential. You should understand containers and images.'
      },
      {
        question: 'Which K8s distribution do you use?',
        answer: 'We cover vanilla Kubernetes. Concepts apply to EKS, GKE, AKS, and others.'
      },
      {
        question: 'Is this hands-on?',
        answer: 'Absolutely! You\'ll build clusters and deploy real applications throughout.'
      },
      {
        question: 'Do I need a cloud account?',
        answer: 'You can use local tools (minikube, kind) or cloud providers. Both approaches are covered.'
      },
      {
        question: 'Will I be CKA-ready?',
        answer: 'This course covers all CKA exam topics. We recommend additional practice exams.'
      }
    ],
    featured: true
  },
  {
    id: 'terraform',
    slug: 'terraform',
    title: 'Terraform Infrastructure as Code',
    category: 'DevOps',
    blurb: 'Automate cloud infrastructure with Terraform—provision, manage, and version your IaC.',
    level: 'Intermediate',
    duration: '5 weeks',
    mode: 'Online',
    prerequisites: 'Cloud platform basics (AWS/Azure/GCP)',
    overview: 'Learn Infrastructure as Code with Terraform. Provision and manage cloud resources programmatically using declarative configuration, modules, state management, and best practices.',
    outcomes: [
      'Write Terraform configurations',
      'Manage infrastructure state',
      'Create reusable modules',
      'Implement CI/CD for IaC',
      'Handle secrets and sensitive data',
      'Prepare for Terraform Associate certification'
    ],
    whoFor: [
      'DevOps engineers automating infrastructure',
      'Cloud architects implementing IaC',
      'SREs managing multi-cloud environments',
      'Platform teams building self-service infrastructure'
    ],
    modules: [
      {
        id: 'tf-1',
        title: 'Terraform Basics',
        topics: [
          'Infrastructure as Code concepts',
          'Terraform vs other IaC tools',
          'Installation and setup',
          'HCL syntax basics',
          'Terraform workflow: init, plan, apply',
          'Providers and resources'
        ]
      },
      {
        id: 'tf-2',
        title: 'State Management',
        topics: [
          'Understanding Terraform state',
          'Local vs remote state',
          'State locking',
          'S3 + DynamoDB backend',
          'State manipulation',
          'Workspaces'
        ]
      },
      {
        id: 'tf-3',
        title: 'Advanced Configuration',
        topics: [
          'Variables and outputs',
          'Data sources',
          'Loops and conditionals',
          'Functions and expressions',
          'Dynamic blocks',
          'Provisioners (when to avoid)'
        ]
      },
      {
        id: 'tf-4',
        title: 'Modules & Composition',
        topics: [
          'Creating modules',
          'Module inputs and outputs',
          'Module versioning',
          'Registry modules',
          'Module composition patterns',
          'Testing modules'
        ]
      },
      {
        id: 'tf-5',
        title: 'Production Patterns',
        topics: [
          'Secrets management',
          'CI/CD integration',
          'Terraform Cloud/Enterprise',
          'Policy as code with Sentinel',
          'Multi-environment strategies',
          'Troubleshooting and debugging'
        ]
      }
    ],
    labs: [
      'Provision VPC and EC2 infrastructure on AWS',
      'Configure remote state with S3 backend',
      'Build reusable module for common patterns',
      'Implement multi-environment setup',
      'Integrate Terraform with GitHub Actions CI/CD',
      'Manage secrets with Vault or cloud secret managers'
    ],
    certification: 'Prepares for HashiCorp Certified: Terraform Associate certification.',
    faqs: [
      {
        question: 'Which cloud provider should I know?',
        answer: 'At least one (AWS, Azure, or GCP). Examples use AWS but concepts apply to all.'
      },
      {
        question: 'Is Terraform better than CloudFormation?',
        answer: 'Terraform is multi-cloud and has broader community support. We discuss trade-offs.'
      },
      {
        question: 'Do I need programming skills?',
        answer: 'Basic scripting helps, but Terraform uses declarative HCL which is approachable.'
      },
      {
        question: 'How do you handle secrets?',
        answer: 'We cover multiple approaches: Vault, cloud secret managers, and environment variables.'
      },
      {
        question: 'Will I learn Terragrunt?',
        answer: 'We focus on core Terraform. Terragrunt is mentioned as an advanced tool.'
      }
    ],
    featured: false
  },
  {
    id: 'ansible',
    slug: 'ansible',
    title: 'Ansible Automation',
    category: 'DevOps',
    blurb: 'Automate configuration and deployment with Ansible playbooks, roles, and orchestration.',
    level: 'Beginner',
    duration: '4 weeks',
    mode: 'Online',
    prerequisites: 'Linux basics, SSH knowledge',
    overview: 'Master configuration management and automation with Ansible. Learn playbooks, roles, inventory management, and how to automate server provisioning and application deployment.',
    outcomes: [
      'Write Ansible playbooks',
      'Manage inventory and variables',
      'Create reusable roles',
      'Automate server configuration',
      'Integrate with CI/CD pipelines',
      'Troubleshoot automation issues'
    ],
    whoFor: [
      'System administrators automating tasks',
      'DevOps engineers managing configurations',
      'IT operations teams',
      'Anyone seeking agentless automation'
    ],
    modules: [
      {
        id: 'ans-1',
        title: 'Ansible Fundamentals',
        topics: [
          'What is configuration management?',
          'Ansible architecture',
          'Agentless design',
          'Installation and setup',
          'Ad-hoc commands',
          'Inventory basics'
        ]
      },
      {
        id: 'ans-2',
        title: 'Playbooks',
        topics: [
          'YAML syntax',
          'Playbook structure',
          'Tasks and modules',
          'Handlers and notifications',
          'Variables and facts',
          'Conditionals and loops',
          'Templates with Jinja2'
        ]
      },
      {
        id: 'ans-3',
        title: 'Roles & Galaxy',
        topics: [
          'Role structure',
          'Creating roles',
          'Role dependencies',
          'Ansible Galaxy',
          'Best practices',
          'Testing roles'
        ]
      },
      {
        id: 'ans-4',
        title: 'Advanced Topics',
        topics: [
          'Ansible Vault for secrets',
          'Dynamic inventory',
          'Tags and task control',
          'Error handling',
          'Ansible Tower/AWX',
          'Integration with cloud providers'
        ]
      }
    ],
    labs: [
      'Configure web server cluster with playbook',
      'Deploy application with roles and templates',
      'Manage multi-environment inventory',
      'Encrypt secrets with Ansible Vault',
      'Automate server hardening and patching'
    ],
    certification: 'Foundation for Red Hat Certified Specialist in Ansible Automation.',
    faqs: [
      {
        question: 'How is Ansible different from Terraform?',
        answer: 'Ansible focuses on configuration management; Terraform on infrastructure provisioning. They complement each other.'
      },
      {
        question: 'Do I need to install agents?',
        answer: 'No! Ansible is agentless and uses SSH, making it simple to get started.'
      },
      {
        question: 'Can Ansible manage Windows?',
        answer: 'Yes, using WinRM. We cover both Linux and Windows automation.'
      },
      {
        question: 'Is Python required?',
        answer: 'Python is installed on managed nodes, but you don\'t need to write Python code.'
      },
      {
        question: 'What about Ansible Tower?',
        answer: 'We introduce Tower/AWX for enterprise features like RBAC and scheduling.'
      }
    ],
    featured: false
  },
  {
    id: 'jenkins',
    slug: 'jenkins',
    title: 'Jenkins CI/CD',
    category: 'DevOps',
    blurb: 'Build automated CI/CD pipelines with Jenkins—from simple builds to complex orchestration.',
    level: 'Intermediate',
    duration: '5 weeks',
    mode: 'Online',
    prerequisites: 'Basic scripting, version control (Git)',
    overview: 'Learn continuous integration and deployment with Jenkins. Master pipeline-as-code, plugins, integrations, and best practices for building robust CI/CD workflows.',
    outcomes: [
      'Set up and configure Jenkins',
      'Create declarative and scripted pipelines',
      'Integrate with Git, Docker, and cloud platforms',
      'Implement automated testing',
      'Manage credentials and secrets',
      'Scale Jenkins with agents'
    ],
    whoFor: [
      'DevOps engineers building CI/CD',
      'Developers automating builds',
      'Release engineers',
      'Teams adopting continuous delivery'
    ],
    modules: [
      {
        id: 'jen-1',
        title: 'Jenkins Basics',
        topics: [
          'CI/CD concepts',
          'Jenkins architecture',
          'Installation and setup',
          'UI navigation',
          'Jobs and builds',
          'Plugin ecosystem'
        ]
      },
      {
        id: 'jen-2',
        title: 'Pipeline as Code',
        topics: [
          'Declarative vs scripted pipelines',
          'Jenkinsfile syntax',
          'Stages and steps',
          'Build, test, deploy workflow',
          'Post actions',
          'Pipeline libraries'
        ]
      },
      {
        id: 'jen-3',
        title: 'Integrations',
        topics: [
          'Git integration and webhooks',
          'Docker build and push',
          'Kubernetes deployment',
          'Cloud integrations (AWS, Azure, GCP)',
          'Notification (Slack, email)',
          'Artifact management'
        ]
      },
      {
        id: 'jen-4',
        title: 'Advanced Topics',
        topics: [
          'Distributed builds with agents',
          'Credentials management',
          'Shared libraries',
          'Pipeline optimization',
          'Security and RBAC',
          'Monitoring and metrics'
        ]
      }
    ],
    labs: [
      'Build multi-stage pipeline for web application',
      'Implement automated testing in pipeline',
      'Deploy containerized app to Kubernetes',
      'Configure parallel builds and matrix builds',
      'Set up distributed Jenkins with agents',
      'Integrate with GitHub and Docker Hub'
    ],
    certification: 'Prepares for CloudBees Jenkins Engineer certification.',
    faqs: [
      {
        question: 'Is Jenkins still relevant with GitHub Actions?',
        answer: 'Yes! Jenkins offers more flexibility and is widely used in enterprises.'
      },
      {
        question: 'Do I need Java knowledge?',
        answer: 'No, but basic understanding of Groovy helps for advanced pipelines.'
      },
      {
        question: 'Can Jenkins deploy to cloud?',
        answer: 'Absolutely! We cover AWS, Azure, GCP, and Kubernetes deployments.'
      },
      {
        question: 'What about Blue Ocean?',
        answer: 'We introduce Blue Ocean UI but focus on Jenkinsfile-based pipelines.'
      },
      {
        question: 'How do I scale Jenkins?',
        answer: 'We cover agent-based scaling, containerized agents, and cloud scaling strategies.'
      }
    ],
    featured: false
  },
  {
    id: 'git',
    slug: 'git',
    title: 'Git Version Control',
    category: 'DevOps',
    blurb: 'Master Git workflows, branching, merging, rebasing, and collaboration strategies.',
    level: 'Beginner',
    duration: '3 weeks',
    mode: 'Online',
    prerequisites: 'Basic command line',
    overview: 'Comprehensive Git training from basics to advanced workflows. Learn version control, branching strategies, collaboration, and best practices for individual and team development.',
    outcomes: [
      'Understand Git fundamentals',
      'Manage branches and merges',
      'Collaborate with remote repositories',
      'Resolve merge conflicts',
      'Use Git in team workflows',
      'Apply GitFlow and trunk-based development'
    ],
    whoFor: [
      'Developers new to version control',
      'Teams standardizing Git workflows',
      'Anyone collaborating on code',
      'Students and bootcamp graduates'
    ],
    modules: [
      {
        id: 'git-1',
        title: 'Git Fundamentals',
        topics: [
          'Version control concepts',
          'Git installation and setup',
          'Repository initialization',
          'Staging and committing',
          'Git log and history',
          'Gitignore patterns'
        ]
      },
      {
        id: 'git-2',
        title: 'Branching & Merging',
        topics: [
          'Branch creation and switching',
          'Merge strategies',
          'Conflict resolution',
          'Rebase vs merge',
          'Cherry-picking commits',
          'Stashing changes'
        ]
      },
      {
        id: 'git-3',
        title: 'Remote Collaboration',
        topics: [
          'Remote repositories',
          'Push, pull, fetch',
          'GitHub/GitLab/Bitbucket',
          'Pull requests and code review',
          'Forking workflow',
          'Upstream synchronization'
        ]
      },
      {
        id: 'git-4',
        title: 'Advanced Workflows',
        topics: [
          'GitFlow branching model',
          'Trunk-based development',
          'Feature branches',
          'Release management',
          'Tags and versioning',
          'Hooks and automation',
          'Submodules and subtrees'
        ]
      }
    ],
    labs: [
      'Initialize repository and make commits',
      'Create feature branch and merge with conflicts',
      'Collaborate on shared repository',
      'Implement GitFlow workflow',
      'Set up pre-commit hooks',
      'Manage releases with tags'
    ],
    certification: 'Foundation for all DevOps and development roles requiring version control.',
    faqs: [
      {
        question: 'Is this for complete beginners?',
        answer: 'Yes! We start from scratch and build to advanced topics.'
      },
      {
        question: 'Do I need to know the command line?',
        answer: 'Basic familiarity helps, but we teach the necessary commands.'
      },
      {
        question: 'Will we use GitHub?',
        answer: 'Yes, and we also cover GitLab and Bitbucket. Concepts apply to all.'
      },
      {
        question: 'What if I\'ve only used SVN?',
        answer: 'We highlight key differences and help you transition from centralized VCS.'
      },
      {
        question: 'How long does it take to learn Git?',
        answer: 'Basics in days; mastery takes practice. Our 3-week course gives you a solid foundation.'
      }
    ],
    featured: false
  },
  {
    id: 'github-actions',
    slug: 'github-actions',
    title: 'GitHub Actions',
    category: 'DevOps',
    blurb: 'Automate workflows with GitHub Actions—CI/CD, automation, and integrations.',
    level: 'Beginner',
    duration: '3 weeks',
    mode: 'Online',
    prerequisites: 'Git basics, YAML familiarity',
    overview: 'Learn GitHub Actions for CI/CD and workflow automation. Build automated pipelines for testing, building, and deploying applications directly from GitHub.',
    outcomes: [
      'Create GitHub Actions workflows',
      'Automate testing and builds',
      'Deploy to cloud platforms',
      'Use marketplace actions',
      'Create custom actions',
      'Implement advanced automation'
    ],
    whoFor: [
      'Developers using GitHub',
      'Teams adopting GitHub Actions for CI/CD',
      'Open source maintainers',
      'Anyone automating GitHub workflows'
    ],
    modules: [
      {
        id: 'gha-1',
        title: 'Actions Fundamentals',
        topics: [
          'GitHub Actions overview',
          'Workflow syntax (YAML)',
          'Events and triggers',
          'Jobs and steps',
          'Runners: GitHub-hosted vs self-hosted',
          'Marketplace actions'
        ]
      },
      {
        id: 'gha-2',
        title: 'CI/CD Workflows',
        topics: [
          'Build and test automation',
          'Matrix builds',
          'Caching dependencies',
          'Artifacts and releases',
          'Deployment strategies',
          'Environment secrets'
        ]
      },
      {
        id: 'gha-3',
        title: 'Custom Actions',
        topics: [
          'JavaScript actions',
          'Docker container actions',
          'Composite actions',
          'Publishing to marketplace',
          'Action inputs and outputs',
          'Testing actions'
        ]
      },
      {
        id: 'gha-4',
        title: 'Advanced Automation',
        topics: [
          'Reusable workflows',
          'Conditional execution',
          'Workflow orchestration',
          'Security scanning',
          'Dependabot integration',
          'GitHub API automation'
        ]
      }
    ],
    labs: [
      'Build CI workflow for Node.js application',
      'Deploy to AWS/Azure/GCP from Actions',
      'Create custom composite action',
      'Implement matrix testing across versions',
      'Set up automated releases with semantic versioning',
      'Configure code scanning and security checks'
    ],
    certification: 'Foundation for modern GitHub-based development workflows.',
    faqs: [
      {
        question: 'How is this different from Jenkins?',
        answer: 'Actions is integrated into GitHub, simpler for GitHub-hosted projects, but less flexible than Jenkins.'
      },
      {
        question: 'Can I use this with private repos?',
        answer: 'Yes! GitHub provides free Actions minutes for private repos (limits apply).'
      },
      {
        question: 'Do I need to learn YAML?',
        answer: 'Basic YAML is needed. We cover the syntax you\'ll use.'
      },
      {
        question: 'Can Actions deploy to Kubernetes?',
        answer: 'Absolutely! We show deployments to K8s, EKS, GKE, and AKS.'
      },
      {
        question: 'What about self-hosted runners?',
        answer: 'We cover both GitHub-hosted and self-hosted runner setup.'
      }
    ],
    featured: false
  },
  {
    id: 'python',
    slug: 'python',
    title: 'Python Programming',
    category: 'Scriptings',
    blurb: 'Learn Python for automation, scripting, data processing, and DevOps tasks.',
    level: 'Beginner',
    duration: '6 weeks',
    mode: 'Online',
    prerequisites: 'Basic programming concepts helpful but not required',
    overview: 'Comprehensive Python course covering fundamentals, scripting, automation, and practical applications for DevOps, system administration, and data processing.',
    outcomes: [
      'Write Python programs and scripts',
      'Automate tasks and processes',
      'Work with files, APIs, and databases',
      'Use Python for DevOps automation',
      'Apply object-oriented programming',
      'Debug and test Python code'
    ],
    whoFor: [
      'Beginners learning to program',
      'System administrators automating tasks',
      'DevOps engineers scripting workflows',
      'Anyone needing Python for work'
    ],
    modules: [
      {
        id: 'py-1',
        title: 'Python Basics',
        topics: [
          'Installation and setup',
          'Variables and data types',
          'Operators and expressions',
          'Control flow: if, loops',
          'Functions and modules',
          'Input/output operations'
        ]
      },
      {
        id: 'py-2',
        title: 'Data Structures',
        topics: [
          'Lists and tuples',
          'Dictionaries and sets',
          'List comprehensions',
          'String manipulation',
          'Working with JSON',
          'File I/O operations'
        ]
      },
      {
        id: 'py-3',
        title: 'Object-Oriented Python',
        topics: [
          'Classes and objects',
          'Inheritance and polymorphism',
          'Magic methods',
          'Decorators',
          'Context managers',
          'Error handling'
        ]
      },
      {
        id: 'py-4',
        title: 'Practical Applications',
        topics: [
          'Working with APIs (requests)',
          'Web scraping (BeautifulSoup)',
          'Database operations (SQLite)',
          'Automation scripts',
          'Regular expressions',
          'Testing with pytest',
          'Virtual environments and pip'
        ]
      }
    ],
    labs: [
      'Build file processing automation script',
      'Create REST API client for cloud services',
      'Automate server monitoring and alerts',
      'Parse and transform log files',
      'Build CLI tool with argument parsing',
      'Scrape and analyze web data'
    ],
    certification: 'Foundation for Python Institute certifications and DevOps automation roles.',
    faqs: [
      {
        question: 'Is Python good for beginners?',
        answer: 'Yes! Python\'s clear syntax makes it one of the best first languages.'
      },
      {
        question: 'Will this help with DevOps?',
        answer: 'Absolutely! Python is widely used for automation, tooling, and infrastructure scripts.'
      },
      {
        question: 'Do I need math skills?',
        answer: 'Not for general programming and automation. We focus on practical applications.'
      },
      {
        question: 'What version of Python?',
        answer: 'Python 3 (latest stable). We highlight differences from Python 2 where relevant.'
      },
      {
        question: 'Can I build web apps?',
        answer: 'This course focuses on scripting. We offer separate web development courses.'
      }
    ],
    featured: true
  },
  {
    id: 'bash-shell',
    slug: 'bash-shell',
    title: 'Bash/Shell Scripting',
    category: 'Scriptings',
    blurb: 'Master shell scripting for automation, system administration, and DevOps workflows.',
    level: 'Beginner',
    duration: '4 weeks',
    mode: 'Online',
    prerequisites: 'Basic Linux command line',
    overview: 'Learn Bash scripting from fundamentals to advanced automation. Write powerful scripts for system administration, DevOps tasks, and process automation.',
    outcomes: [
      'Write effective Bash scripts',
      'Automate repetitive tasks',
      'Process text and files',
      'Use advanced shell features',
      'Debug and troubleshoot scripts',
      'Apply best practices'
    ],
    whoFor: [
      'Linux system administrators',
      'DevOps engineers',
      'Anyone working in Unix/Linux environments',
      'Automation enthusiasts'
    ],
    modules: [
      {
        id: 'bash-1',
        title: 'Shell Basics',
        topics: [
          'Shell types and Bash',
          'Shebang and script execution',
          'Variables and quoting',
          'Command substitution',
          'Exit codes and status',
          'Input/output redirection'
        ]
      },
      {
        id: 'bash-2',
        title: 'Control Structures',
        topics: [
          'Conditional statements (if, case)',
          'Loops (for, while, until)',
          'Functions',
          'Arrays',
          'String manipulation',
          'Arithmetic operations'
        ]
      },
      {
        id: 'bash-3',
        title: 'Text Processing',
        topics: [
          'grep, sed, awk',
          'cut, tr, sort, uniq',
          'Regular expressions',
          'Pipeline construction',
          'Process substitution',
          'Here documents'
        ]
      },
      {
        id: 'bash-4',
        title: 'Advanced Topics',
        topics: [
          'Error handling and debugging',
          'Signal handling (trap)',
          'Background processes',
          'Named pipes (FIFOs)',
          'Argument parsing (getopts)',
          'Script optimization',
          'Security best practices'
        ]
      }
    ],
    labs: [
      'Write system health monitoring script',
      'Automate log rotation and cleanup',
      'Build deployment automation script',
      'Create interactive menu system',
      'Parse and report on server logs',
      'Implement backup automation with error handling'
    ],
    certification: 'Essential skill for Linux system administration and DevOps roles.',
    faqs: [
      {
        question: 'Should I learn Bash or Python?',
        answer: 'Both! Bash excels at system tasks and gluing commands; Python for complex logic.'
      },
      {
        question: 'Is this for Linux only?',
        answer: 'Primarily Linux/Unix. Many concepts apply to macOS. Windows has WSL and Git Bash.'
      },
      {
        question: 'How is this different from PowerShell?',
        answer: 'Bash is Unix/Linux standard; PowerShell is Windows-focused. We offer a PowerShell course too.'
      },
      {
        question: 'Do I need programming experience?',
        answer: 'No, but basic Linux command line experience is essential.'
      },
      {
        question: 'Will this help with DevOps?',
        answer: 'Yes! Shell scripting is fundamental for automation in DevOps.'
      }
    ],
    featured: false
  },
  {
    id: 'powershell',
    slug: 'powershell',
    title: 'PowerShell Scripting',
    category: 'Scriptings',
    blurb: 'Automate Windows and cloud with PowerShell—scripting, administration, and DevOps.',
    level: 'Beginner',
    duration: '5 weeks',
    mode: 'Online',
    prerequisites: 'Windows basics',
    overview: 'Master PowerShell for Windows automation, cloud management (Azure), and cross-platform scripting. Learn cmdlets, pipelines, modules, and automation techniques.',
    outcomes: [
      'Write PowerShell scripts and functions',
      'Automate Windows administration',
      'Manage Azure resources',
      'Work with objects and pipelines',
      'Create modules and advanced functions',
      'Apply best practices and error handling'
    ],
    whoFor: [
      'Windows system administrators',
      'Azure cloud engineers',
      'DevOps teams on Windows',
      'IT professionals automating tasks'
    ],
    modules: [
      {
        id: 'ps-1',
        title: 'PowerShell Fundamentals',
        topics: [
          'PowerShell vs Command Prompt',
          'Cmdlets and syntax',
          'Get-Help and discovery',
          'Variables and data types',
          'Pipelines and objects',
          'Formatting output'
        ]
      },
      {
        id: 'ps-2',
        title: 'Scripting Basics',
        topics: [
          'Scripts and execution policy',
          'Control flow (if, switch, loops)',
          'Functions and parameters',
          'Error handling (try/catch)',
          'Working with files',
          'Regular expressions'
        ]
      },
      {
        id: 'ps-3',
        title: 'Advanced PowerShell',
        topics: [
          'Advanced functions and modules',
          'Object manipulation',
          'WMI and CIM',
          'Remoting and sessions',
          'Background jobs',
          'Desired State Configuration (DSC) intro'
        ]
      },
      {
        id: 'ps-4',
        title: 'Cloud & Automation',
        topics: [
          'Azure PowerShell module',
          'Managing Azure resources',
          'Azure Automation',
          'Working with REST APIs',
          'Cross-platform PowerShell Core',
          'CI/CD integration'
        ]
      }
    ],
    labs: [
      'Automate user account management in AD',
      'Create Azure VM deployment script',
      'Build system inventory and reporting tool',
      'Implement scheduled task automation',
      'Develop custom PowerShell module',
      'Automate Azure resource provisioning'
    ],
    certification: 'Foundation for Microsoft automation and Azure administration roles.',
    faqs: [
      {
        question: 'Is PowerShell only for Windows?',
        answer: 'PowerShell Core is cross-platform (Windows, Linux, macOS)!'
      },
      {
        question: 'How is this different from Bash?',
        answer: 'PowerShell is object-based; Bash is text-based. PowerShell excels in Windows/Azure.'
      },
      {
        question: 'Do I need Azure?',
        answer: 'Not required, but Azure modules are covered. Core PowerShell works everywhere.'
      },
      {
        question: 'Is programming experience needed?',
        answer: 'No, but it helps. We teach from scratch.'
      },
      {
        question: 'Will this help with DevOps?',
        answer: 'Yes! PowerShell is essential for Windows-based DevOps and Azure automation.'
      }
    ],
    featured: false
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}

export function getCoursesByCategory(category: CourseCategory): Course[] {
  return courses.filter(course => course.category === category);
}

export function getFeaturedCourses(): Course[] {
  return courses.filter(course => course.featured);
}

export const categories: CourseCategory[] = ['Operating System', 'Cloud', 'DevOps', 'Scriptings'];