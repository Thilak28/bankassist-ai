function Features() {
  const features = [
    {
      title: "AI Analysis",
      desc: "Automatically categorize and analyze transactions."
    },
    {
      title: "PDF Upload",
      desc: "Upload bank statements in PDF or CSV."
    },
    {
      title: "Dashboard",
      desc: "Visualize income, expenses and savings."
    },
    {
      title: "Budget Planner",
      desc: "Set budgets and receive smart alerts."
    }
  ];

  return (
    <section className="bg-slate-900 py-20 px-10">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Features
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              {item.title}
            </h3>

            <p className="text-gray-300">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;