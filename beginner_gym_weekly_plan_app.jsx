export default function BeginnerGymWeeklyPlanApp() {
  const weeklyPlan = [
    {
      day: "Monday",
      focus: "Chest + Triceps",
      exercises: [
        { name: "Machine Chest Press", sets: "3", reps: "10-12", tip: "Keep shoulders down and press in control." },
        { name: "Incline Dumbbell Press", sets: "3", reps: "10", tip: "Lower slowly and do not lock elbows hard." },
        { name: "Cable Fly", sets: "3", reps: "12-15", tip: "Slight bend in elbows, squeeze chest at the front." },
        { name: "Tricep Pushdown", sets: "3", reps: "12", tip: "Keep elbows close to your body." },
        { name: "Overhead Dumbbell Extension", sets: "2", reps: "12", tip: "Use light weight and full range." },
      ],
    },
    {
      day: "Tuesday",
      focus: "Back + Biceps",
      exercises: [
        { name: "Lat Pulldown", sets: "3", reps: "10-12", tip: "Pull bar to upper chest, not behind neck." },
        { name: "Seated Cable Row", sets: "3", reps: "10-12", tip: "Keep chest up and pull with elbows." },
        { name: "One-Arm Dumbbell Row", sets: "3", reps: "10 each side", tip: "Do not twist your torso." },
        { name: "Dumbbell Bicep Curl", sets: "3", reps: "12", tip: "Avoid swinging the weight." },
        { name: "Hammer Curl", sets: "2", reps: "12", tip: "Keep wrists neutral." },
      ],
    },
    {
      day: "Wednesday",
      focus: "Legs",
      exercises: [
        { name: "Goblet Squat", sets: "3", reps: "10-12", tip: "Keep chest up and go controlled." },
        { name: "Leg Press", sets: "3", reps: "12", tip: "Do not lock knees at the top." },
        { name: "Leg Extension", sets: "3", reps: "12-15", tip: "Pause briefly at the top." },
        { name: "Leg Curl", sets: "3", reps: "12-15", tip: "Move slowly and feel hamstrings work." },
        { name: "Standing Calf Raise", sets: "4", reps: "15", tip: "Full stretch at bottom, squeeze at top." },
      ],
    },
    {
      day: "Thursday",
      focus: "Shoulders + Abs",
      exercises: [
        { name: "Dumbbell Shoulder Press", sets: "3", reps: "10-12", tip: "Do not arch your lower back." },
        { name: "Lateral Raise", sets: "3", reps: "12-15", tip: "Raise only to shoulder height." },
        { name: "Rear Delt Fly", sets: "3", reps: "12-15", tip: "Use light weight and slow motion." },
        { name: "Plank", sets: "3", reps: "30-45 sec", tip: "Keep body in one straight line." },
        { name: "Hanging Knee Raise", sets: "3", reps: "12", tip: "Lift with abs, not by swinging." },
      ],
    },
    {
      day: "Friday",
      focus: "Full Body Beginner Strength",
      exercises: [
        { name: "Dumbbell Bench Press", sets: "3", reps: "10", tip: "Plant feet firmly and move steadily." },
        { name: "Lat Pulldown", sets: "3", reps: "10", tip: "Control the bar on the way up." },
        { name: "Goblet Squat", sets: "3", reps: "10", tip: "Keep knees tracking over toes." },
        { name: "Seated Dumbbell Press", sets: "2", reps: "10", tip: "Use manageable weight." },
        { name: "Farmer Carry", sets: "3", reps: "30 sec", tip: "Walk tall with tight core." },
      ],
    },
    {
      day: "Saturday",
      focus: "Recovery + Mobility",
      exercises: [
        { name: "Treadmill Walk", sets: "1", reps: "15-20 min", tip: "Easy pace only." },
        { name: "Stretching", sets: "1", reps: "10 min", tip: "Focus on chest, back, legs, shoulders." },
        { name: "Foam Rolling", sets: "1", reps: "5-10 min", tip: "Move slowly over tight areas." },
      ],
    },
    {
      day: "Sunday",
      focus: "Rest",
      exercises: [
        { name: "Complete Rest", sets: "-", reps: "-", tip: "Sleep well and eat enough protein." },
      ],
    },
  ];

  const dietTips = [
    "Eat 4-5 times a day.",
    "Target protein in every meal.",
    "Drink milk, eat eggs, bananas, peanut butter, paneer, dal, chicken or soy chunks.",
    "Drink enough water, especially if taking creatine.",
    "Sleep 7-8 hours for recovery.",
  ];

  const supplementTips = [
    "Creatine type: Creatine Monohydrate",
    "Dose: 3-5 grams daily",
    "Take it any time daily, ideally after workout or with a meal",
    "Drink plenty of water",
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Beginner Muscle Gain Gym App</h1>
          <p className="mt-3 text-base md:text-lg text-slate-600">
            A simple weekly gym plan for a beginner who wants to build muscle safely and consistently.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">Workout Duration</p>
              <p className="text-xl font-semibold">45–60 min</p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">Goal</p>
              <p className="text-xl font-semibold">Muscle Gain</p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">Experience</p>
              <p className="text-xl font-semibold">Beginner</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {weeklyPlan.map((dayPlan) => (
            <div key={dayPlan.day} className="rounded-3xl bg-white p-5 shadow-sm border border-slate-200">
              <div className="mb-4">
                <h2 className="text-2xl font-bold">{dayPlan.day}</h2>
                <p className="text-slate-600 mt-1">{dayPlan.focus}</p>
              </div>

              <div className="space-y-3">
                {dayPlan.exercises.map((exercise) => (
                  <div key={exercise.name} className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold leading-snug">{exercise.name}</h3>
                      <span className="shrink-0 rounded-full bg-slate-200 px-3 py-1 text-sm font-medium">
                        {exercise.sets} × {exercise.reps}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">Tip: {exercise.tip}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold">Diet Tips for Slim Beginners</h2>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              {dietTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold">Creatine Guide</h2>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              {supplementTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold">Important Beginner Rules</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              "Learn proper form first, then increase weight.",
              "Start light for the first 2 weeks.",
              "Rest 60-90 seconds between sets.",
              "Try to improve reps or weight gradually every week.",
              "Do not skip leg day.",
              "Recovery and food are as important as training.",
            ].map((rule) => (
              <div key={rule} className="rounded-2xl bg-slate-50 p-4 border border-slate-100 text-slate-700">
                {rule}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
