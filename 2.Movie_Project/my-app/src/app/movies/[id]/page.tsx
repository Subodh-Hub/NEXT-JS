import { FaStar } from "react-icons/fa";

interface MovieProps {
  params: {
    id: string;
  };
}

const MovieDetail = async ({ params }: MovieProps) => {
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
  const movieId = Number(params?.id);
  const specificMovie = movies.find((m) => m.id === movieId);
  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
      {/* Movie Title & Description */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-semibold text-white mb-4">
          {specificMovie?.title}
        </h2>
        <p>{specificMovie?.description}</p>
      </div>
      {/* Ratings & Comments Summary */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xl text-gray-300">Rating</p>
            <div className="flex item-center text-yellow-400">
              <FaStar className="mr-1" />
              <span className="text-2xl font-bold">
                {specificMovie?.rating}
              </span>
              /5
            </div>
          </div>

          <div>
            <p>Comments:</p>
            <p className="text-2xl font-semibold text-white">
              {specificMovie?.comments.length}
            </p>
          </div>
        </div>
      </div>
      {/* Comment Section */}
      <div>
        <h3 className="text-3xl font-semibold text-white mb-4">Comments:</h3>
        <ul className="space-y-4">
          {specificMovie?.comments.map((c, index) => (
            <li
              key={index}
              className="bg-gray-800 p-4 rounded-lg hover:shadow-xl transition-hover duration-300"
            >
              <p className="text-gray-300">{c}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetail;
