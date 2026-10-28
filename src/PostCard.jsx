import { useState } from 'react';

function PostsCard(props) {
  const { title, body } = props;
  const [clicked, setClicked] = useState(false);

  return (
    <div
        onClick={() => setClicked(!clicked)} className={`${clicked ? "bg-blue-100" : "bg-white"} text-white rounded-md  p-6 rounded-lg shadow hover:shadow-md transition-shadow`}
     >
     <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm leading-relaxed">   
        {body}
        </p>
     </div>
       
  );
}

export default PostsCard;
