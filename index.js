// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has ${this.complete? "" : "not "}been completed`);
    },
    //markCompleted is being considered as a datatype
    markCompleted: function() {
      this.complete = true;
    }

  };
  return task;
}

const task1 = newTask("Clean cat Litter", "Take all the [] out of the litter box");
const task2 = newTask("Do Laundry", "imoji");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();

//console.log(tasks);
