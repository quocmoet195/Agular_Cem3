export type TaskType = 'Bug' | 'Task';
export type TaskPriority = 'Critical' | 'High' | 'Medium' | 'Low';
export type TaskStatus = 'New' | 'In_progress' | 'Review' | 'Done' | 'Rejected';
export interface Task {
  id: number;                   
  type: TaskType;               
  priority?: TaskPriority;      
  status: TaskStatus;           
  title: string;                
  description?: string;         
  assignee?: string;            
  reporter: string;             
  createdAt: Date;              
  updatedAt: Date;              
}