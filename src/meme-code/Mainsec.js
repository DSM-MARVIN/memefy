import React from 'react';
let image = require('../meme-code/memeimg.jpg')

class Mainsec extends React.Component{

    constructor(){
        super();
        this.state = {
            topText : "",
            bottomText : "",
            randomImg : image,
            allMemeImgs : []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            // console.log(memes[0])
            this.setState({allMemeImgs : memes})
        })
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({[name] : value})
    }

    handleSubmit(event){
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randomMemeImg = this.state.allMemeImgs[randomNum].url
        this.setState({randomImg : randomMemeImg})
    }



    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        className='input form-control'
                        type='text'
                        name='topText'
                        placeholder='top text'
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        className='input form-control'
                        type='text'
                        name='bottomText'
                        placeholder='bottom text'
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />

                    <button className='btn btn-primary'>Generate</button>
                </form>
                <div className="imgmeme">
                    <img src={this.state.randomImg} alt="meme" height="400px" className='main-img' />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }

}

export default Mainsec;