import React from 'react';
class FormClassBasedComponenet extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Name:'',
            Department:'',
            Rating:'',
        }
    }
    onChangeFunc=(change)=>{
        this.setState({[change.target.name]:change.target.value})
        this.setState({[change.target.Department]:change.target.value})
        this.setState({[change.target.Rating]:change.target.value})
    }
    render() {
        return (
            <div id="container">
                <form>
                    <div>
                        <label id="name">Name :
                            <input type={"text"} name={"Name"} placeholder={"Enter Name Here"} value={this.state.Name} onChange={(change)=>{this.onChangeFunc(change)}}/>
                        </label>
                    </div><br />
                    <div>
                        <label id="department">Department :
                            <input type={"text"} name={"Department"} placeholder={"Enter Department Here"} value={this.state.Department} onChange={(change)=>{this.onChangeFunc(change)}}/>
                        </label>
                    </div><br />
                    <div>
                        <label id="Place">Rating :
                            <input type={"number"} name={"Rating"} placeholder={"Enter Place Here"}value={this.state.Rating} onChange={(change)=>{this.onChangeFunc(change)}}/>
                        </label>
                    </div><br />
                    <button onClick={(change)=>{
                        change.preventDefault();//basically used to prevent from refresh the page
                        const storagePlace=document.getElementById('StoragePlace')
                        const update=document.createElement('div')
                        update.innerHTML=`Name : ${this.state.Name} | Department : ${this.state.Department} | Rating : ${this.state.Rating}`
                        storagePlace.appendChild(update);
                        console.log(update)
                    }} type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default FormClassBasedComponenet;