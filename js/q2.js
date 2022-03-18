const employeeList = [

    {
        name: "Amy",
        scores: []
  
    },
  
    {
        name: "Beth",
        scores: []
    },
  
    {
        name: "Chuck",
        scores: []
    },
  
    {
        name: "Dave",
        scores: []
    },
  
    {
        name: "Eric",
        scores: []
    },
  
    {
        name: "Fran",
        scores: []
    },
  
    {
        name: "Gina",
        scores: []
    },
  
    {
        name: "Henry",
        scores: []
    }
  
  ];

  const Results = employeeList.filter(employee => employee.Name).map(employee => {
    return {
        Name: employee.Name,
        Scores: employee.scores,
        avgScore: employee.scores.reduce((sum, score) => sum + score, 0) / student.scores.length,
        minScore: Math.min(...employee.scores),
    };
});

//Output
console.log(Results);