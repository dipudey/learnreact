import React from 'react';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         date: new Date(),
    //     };
    // }
    state = {
        locale : 'bn-BD', 
        date: new Date(),
    }

    componentDidMount() {
        this.clocktimer = setInterval(() => this.tick(),1000)
    }

    componentWillUnmount() {
        clearInterval(this.clocktimer)
    }

    handalClick = (locale) => {
      this.setState({
        locale : locale
        // locale : 'en-US'
      });
    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }


    render(){
      const {date,locale} = this.state;
      let button;
      if(locale === 'bn-BD') {
        button = (
          <button type="button" onClick={() => this.handalClick('en-US')}>Click Me</button>
        )
      }
      else {
        button = (
          <button type="button" onClick={() => this.handalClick('bn-BD')}>Click Me</button>
        )
      }

      return (
        <div>
          <h1 className="headding">
            <span className="text">{ date.toLocaleTimeString(locale)}</span>
          </h1>
          {/* <button type="button" onClick={this.handalClick.bind('en-US')}>Click Me</button> */}
          { button }
        </div>
      )
      
    }
}

export default App;