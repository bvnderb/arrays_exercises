const courses = [
    { 
        id: "CS101", 
        title: "Intro to Programming", 
        category: "Computer Science", 
        difficulty: "Beginner", 
        price: 49.99, 
        students: 1500,
        ratings: [4.5, 4.7, 4.2, 4.8, 4.6]
    },
    { 
        id: "MATH202", 
        title: "Advanced Calculus", 
        category: "Mathematics", 
        difficulty: "Advanced", 
        price: 79.99, 
        students: 750,
        ratings: [4.3, 4.1, 4.6, 4.4, 4.5]
    },
    { 
        id: "CS102", 
        title: "Data Structures and Algorithms", 
        category: "Computer Science", 
        difficulty: "Intermediate", 
        price: 59.99, 
        students: 1200,
        ratings: [4.6, 4.7, 4.5, 4.8, 4.4]
    },
    { 
        id: "MATH303", 
        title: "Linear Algebra", 
        category: "Mathematics", 
        difficulty: "Advanced", 
        price: 69.99, 
        students: 680,
        ratings: [4.4, 4.2, 4.5, 4.6, 4.3]
    },
    { 
        id: "PHY101", 
        title: "Introduction to Physics", 
        category: "Physics", 
        difficulty: "Beginner", 
        price: 39.99, 
        students: 2300,
        ratings: [4.7, 4.5, 4.6, 4.8, 4.4]
    },
    { 
        id: "HIST201", 
        title: "World History: The Modern Era", 
        category: "History", 
        difficulty: "Intermediate", 
        price: 29.99, 
        students: 950,
        ratings: [4.2, 4.3, 4.1, 4.4, 4.0]
    },
    { 
        id: "ART104", 
        title: "Basics of Digital Art", 
        category: "Arts", 
        difficulty: "Beginner", 
        price: 24.99, 
        students: 3100,
        ratings: [4.8, 4.9, 4.7, 4.6, 4.7]
    },
    { 
        id: "BIO202", 
        title: "Molecular Biology", 
        category: "Biology", 
        difficulty: "Advanced", 
        price: 89.99, 
        students: 540,
        ratings: [4.5, 4.3, 4.4, 4.5, 4.6]
    },
    { 
        id: "ENG101", 
        title: "English Literature: Classics", 
        category: "Literature", 
        difficulty: "Beginner", 
        price: 34.99, 
        students: 1800,
        ratings: [4.1, 4.3, 4.2, 4.4, 4.5]
    }
];

// Tasks:
// 1. Calculate the average rating for each course
// 2. Find all beginner-level courses
// 3. Sort courses by number of students (descending)
// 4. Group courses by category
// 5. Calculate total revenue from all courses
// 6. Find the highest-rated course

courses.forEach(course => {
    const total = course.ratings.reduce ((sum, rating) => sum +rating, 0);
    const average = total / course.ratings.length;

    console.log(`course name: ${course.title}, Average rating: ${average.toFixed(2)}`);
});

// output
// course name: Intro to Programming, Average rating: 4.56
// course name: Advanced Calculus, Average rating: 4.38
// course name: Data Structures and Algorithms, Average rating: 4.60
// course name: Linear Algebra, Average rating: 4.40
// course name: Introduction to Physics, Average rating: 4.60
// course name: World History: The Modern Era, Average rating: 4.20
// course name: Basics of Digital Art, Average rating: 4.74
// course name: Molecular Biology, Average rating: 4.46
// course name: English Literature: Classics, Average rating: 4.30

