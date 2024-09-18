export type Instruction = string[];

export type Exercise = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: Instruction;
};

export type workoutFormValues = {
  name: string;
  description: string;
};
