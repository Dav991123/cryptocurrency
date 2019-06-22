import React from 'react';
import Websocket from 'react-websocket';
const emojiData = [
    {   
        id: '1',
        name: 'displeased'
    },
    {   
        id: '2',
        name: 'good'
    },
    {   
        id: '3',
        name: 'poorly'
    },
]


class Evaluation extends React.Component {

    request = (e) => {
        const emoji = e.target.getAttribute('data-key');
        console.log(emoji)
        
        fetch('/Data',{
            method: 'POST',
            headers:{
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
                emoji
            })
    })
    .then(res => res.json())
    .then(value => {console.log('thanks for accepting ');})
    
    .catch(err => console.log('Oooops Error'));
        
    }

    handleData(data) {
        let result = JSON.parse(data);
        console.log(result)
        console.log(result);
        console.log('lalal')
      }

    componentDidMount() {
        window.addEventListener('load', this.handleData);
     }
    render() {
        console.log(10)
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

                <Websocket url='ws://localhost:8888/live/product/12345'
              onOpen={this.handleData}/>
            </div>
        )
    }
}
export default Evaluation;

