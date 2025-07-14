import Link from "next/link";
import React from "react";

const MoviePage = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      comments: ["Mind-blowing!", "Great visuals.", "Loved the concept."],
      rating: 4.8,
      description:
        "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      comments: [
        "A timeless classic.",
        "Inspirational.",
        "Amazing storytelling.",
      ],
      rating: 4.9,
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      id: 3,
      title: "The Matrix",
      comments: ["Revolutionary!", "Neo is the One.", "Mind = Blown."],
      rating: 4.7,
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    },
    {
      id: 4,
      title: "Interstellar",
      comments: [
        "Emotional and intelligent.",
        "Hans Zimmer’s score is epic.",
        "A masterpiece.",
      ],
      rating: 4.6,
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    },
    {
      id: 5,
      title: "Parasite",
      comments: [
        "Incredible storytelling.",
        "Dark and clever.",
        "Deserved the Oscar!",
      ],
      rating: 4.5,
      description:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    },
  ];
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semi-bold mb-4">Movies List</h2>
      <ul className="space-y-4">
        {movies.map((movie) => (
          <li key={movie.id} className="bg-gray-800 p-4 rounded-lg">
            <Link
              className="bg-gray-800 p-4 rounded-lg"
              href={`movies/${movie.id}`}  
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviePage;
