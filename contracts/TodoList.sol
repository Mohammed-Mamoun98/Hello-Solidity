pragma solidity ^0.8.9;

contract TodoList {
    uint256 public taskCount = 0;

    struct Task {
        uint256 id;
        string text;
        bool complted;
    }

    mapping(uint256 => Task)public tasks ;

    function createTask(string memory _text) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _text, false);
    }

    constructor() {
        createTask("Initial Task!");
    }
}
