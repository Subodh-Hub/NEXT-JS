import Link from "next/link";
import React from "react";
import { FaComment, FaStar } from "react-icons/fa";

const Home = () => {
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
  const totalMovies = movies.length;
  const totalComments = movies.reduce(
    (sum, movie) => sum + movie.comments.length,
    0
  );
  const averageRating = (
    movies.reduce((sum, movie) => sum + movie.rating, 0) / totalMovies
  ).toFixed(1);
  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Dashboard Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Total Movies</p>
            <p className="text-4xl font-bold">{totalMovies}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Total Comments</p>
            <p className="text-4xl font-bold">{totalComments}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Average Rating</p>
            <p className="text-4xl font-bold">{averageRating}</p>
          </div>
        </div>
      </div>
      {/* Movie List */}
      <h2 className="text-3xl font-semibold-text-white">Movie List</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Link
              href={`/movies/${movie.id}`}
              className="text-2xl font-bold text-blue-400 hover:text-blue-600"
            >
              {movie.title}
            </Link>
            <p className="text-gray-400 text-sm mt-2">{movie.description}</p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center text-sm text-gray-300">
                <FaComment className="mr-1" />
                <span>{movie.comments.length}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <FaStar className="mr-1" />
                <span>{movie.rating}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
