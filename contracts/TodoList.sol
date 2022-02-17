pragma solidity ^0.8.9;

contract TodoList {
    uint256 public taskCount = 0;

    struct Task {
        uint256 id;
        string text;
        bool completed;
    }

    mapping(uint256 => Task) public tasks;

    function toggleActive(uint256 id) public{
        Task memory _task = tasks[id];
        _task.completed = !_task.completed;
        tasks[id] = _task;
    }

    function createTask(string memory _text) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _text, false);
    }

    constructor() {
        createTask("Initial Task!");
    }
}
