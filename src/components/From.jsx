import React from "react"

class From extends React.Component
{
    state = {
        text: '',
        textarea: '',
        select : '2'
    }

    onchageHandle = (e) => {
        if(e.target.name === "name") {
            this.setState({
                text: e.target.value
            })
        }
        else if(e.target.name === "textarea") {
            this.setState({
                textarea: e.target.value
            })
        }
        else if(e.target.name === 'select') {
            this.setState({
                select: e.target.value
            })
        }
        
    }

    submitHandle = (e) => {
        const {text,textarea,select} = this.state;
        e.preventDefault();
        console.log(text,textarea,select);
    }

    render(){
        const {text,textarea,select} = this.state;

        return (
            <div>
                <form onSubmit={this.submitHandle}>
                    <input type="text" name="name" value={text} onChange={this.onchageHandle} placeholder="Text Here"/>
                    <br/><br/>
                    <textarea name="textarea" onChange={this.onchageHandle} value={textarea} cols="30" rows="4"></textarea>
                    <br/><br/>
                    <select name="select" id="" onChange={this.onchageHandle} value={select}>
                        <option value="1">option</option>
                        <option value="2">option2</option>
                        <option value="3">option3</option>
                    </select>
                    <br/> <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

}

export default From;