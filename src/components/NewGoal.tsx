import React, { FormEvent, useRef } from 'react';
import './NewGoal.css';
interface onAddGoal {
  onAddGoal: (goal: string, summary: string) => void;
}

const NewGoal = ({ onAddGoal }: onAddGoal) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let enteredGoal = goal.current!.value;
    let enteredSummary = summary.current!.value;
    onAddGoal(enteredGoal, enteredSummary);
    event.currentTarget.reset();
    // ! (Non-null assertion): The ! tells TypeScript that you are sure goal.current is not null or
    //  undefined at this point. Without it, TypeScript might throw an error, as goal.current can
    //   potentially be null before the ref is assigned to a DOM element.
    // let a = new FormData(event.currentTarget);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input ref={goal} id="goal" type="text" name="goal" />
      </p>
      <p>
        <label htmlFor="summary">short summary</label>
        <input ref={summary} id="summary" type="text" name="summary" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
