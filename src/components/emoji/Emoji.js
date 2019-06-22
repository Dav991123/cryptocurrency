import React from 'react';



const Emoji = () => {

    request = (e) => {
        console.log(e.target.getAttribute('data-key'));
    }
   
    return (
        <div className="emoji">
             {
                    emojiData.map(item => (
                        <li 
                            key={item.id}
                            onClick={this.request}
                            data-key={item.name}
                        >
                            {item.name}
                        </li>
                    ))
                }
        </div>
    )
}
export default Emoji;