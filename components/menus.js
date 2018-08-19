import axios from 'axios';


// parse date to macth with format of JSON from ASPC such as 'fri
var options = { weekday: 'long' };
var week_day = new Date().toLocaleString('en-US', options)
var week_day_parsed = week_day.toLocaleLowerCase();
week_day_parsed = week_day_parsed.slice(0, 3);



class Menus extends React.Component {

    // initial states
    state = {
        curTime: new Date().toLocaleString(),
        arrayMenus: [],
        fraryBreakfast: [],
        fraryLunch: [],
        fraryDinner: [],
    }


    //calls to fetch the data and create the clock like widget
    componentDidMount() {
        this.setDateTime();
        this.renderData();
    }

    // API call
    renderData() {
        axios.get('https://aspc.pomona.edu/api/menu/?auth_token=5a828762c6abffeee0b12e06cb93c210fda7e93f')
            .then(response => {
                const menus_data = response.data;
                this.setState({ arrayMenus: menus_data })
                const menus = this.state.arrayMenus
                const arraySize = this.state.arrayMenus.length

                //populate array for breakfast, lunch, etc for each dining hall
                for (var i = 0; i < arraySize; i++) {
                    if (menus[i].dining_hall == 'frary' && menus[i].day == 'fri') {
                        if (menus[i].meal == 'breakfast') {
                            this.setState({ fraryBreakfast: menus[i].food_items })
                        }else if (menus[i].meal == 'lunch') {
                            this.setState({ fraryLunch: menus[i].food_items })
                        }else if (menus[i].meal == 'dinner') {
                            this.setState({ fraryDinner: menus[i].food_items })
                        }
                    }
                }
                console.log(this.state.fraryBreakfast);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // create time like widget 
    setDateTime() {
        setInterval(() => {
            this.setState({
                curTime: new Date().toLocaleString()
            })
        }, 1000)
    }

    // render 
    render() {
        // return the breakfast array for now, I suspect we are going to have to 
        // use a conditional and check the props passed in by each page and see 
        //if what dining hall is and render accordingly 
        //i.e if(this.props.diningHall == 'frary'){
        //     render the frary elements 
        // }
        return (
            <div>
                <br/>
                <h6>The day and current time is: {this.state.curTime}</h6>
                <br/>
                <br/>
                <h3>Breakfast</h3>
                <ul className='list-group'>
                    {this.state.fraryBreakfast.map(menu => <li key={menu.id}>{menu}</li>)}
                </ul>
                <br/>
                <h3>Lunch</h3>
                <ul className='list-group'>
                    {this.state.fraryLunch.map(menu => <li key={menu.id}>{menu}</li>)}
                </ul>
                <br/>
                <h3>Dinner</h3>
                <ul className='list-group'>
                    {this.state.fraryDinner.map(menu => <li key={menu.id}>{menu}</li>)}
                </ul>
            </div>


        );
    }



}

export default Menus;