import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  task ="";  //two way binding
  taskList:{id:number , name:string , status:string} []=[];

  // create a add task function

  addTask(){
    this.taskList.push({id:this.taskList.length+1,name:this.task ,status:"Pending"});

    // console.log(this.taskList);  
    this.task="";
  }

  deleteTask(id:number){
    this.taskList = this.taskList.filter((item)=> item.id!==id).map((item,index)=>({...item,id:index+1}));
  }
completeTask(id: number) {

  const task = this.taskList.find(item => item.id === id);

  if (task) {
    task.status = "Completed";
  }

}

pendingTask(id: number) {

  const task = this.taskList.find(item => item.id === id);

  if (task) {
    task.status = "Pending";
  }

}
}
