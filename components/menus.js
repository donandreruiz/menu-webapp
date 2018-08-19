import axios from 'axios';


// parse date to macth with format of JSON from ASPC such as 'fri'
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

        frankBreakfast: [],
        frankLunch: [],
        frankDinner: [],

        cmcBreakfast: [],
        cmcLunch: [],
        cmcDinner: [],

        pitzerBreakfast: [],
        pitzerLunch: [],
        pitzerDinner: [],
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
                // fri is just for testing purposes as I am doing this Sat and its empty lol
                for (var i = 0; i < arraySize; i++) {
                    if (menus[i].dining_hall == 'frary' && menus[i].day == 'fri') {
                        if (menus[i].meal == 'breakfast') {
                            this.setState({ fraryBreakfast: menus[i].food_items })
                        } else if (menus[i].meal == 'lunch') {
                            this.setState({ fraryLunch: menus[i].food_items })
                        } else if (menus[i].meal == 'dinner') {
                            this.setState({ fraryDinner: menus[i].food_items })
                        }
                    }

                    if (menus[i].dining_hall == 'frank' && menus[i].day == 'fri') {
                        if (menus[i].meal == 'breakfast') {
                            this.setState({ frankBreakfast: menus[i].food_items })
                        } else if (menus[i].meal == 'lunch') {
                            this.setState({ frankLunch: menus[i].food_items })
                        } else if (menus[i].meal == 'dinner') {
                            this.setState({ frankDinner: menus[i].food_items })
                        }
                    }

                    if (menus[i].dining_hall == 'cmc' && menus[i].day == 'fri') {
                        if (menus[i].meal == 'breakfast') {
                            this.setState({ cmcBreakfast: menus[i].food_items })
                        } else if (menus[i].meal == 'lunch') {
                            this.setState({ cmcLunch: menus[i].food_items })
                        } else if (menus[i].meal == 'dinner') {
                            this.setState({ cmcDinner: menus[i].food_items })
                        }
                    }

                    if (menus[i].dining_hall == 'pitzer' && menus[i].day == 'fri') {
                        if (menus[i].meal == 'breakfast') {
                            this.setState({ pitzerBreakfast: menus[i].food_items })
                        } else if (menus[i].meal == 'lunch') {
                            this.setState({ pitzerLunch: menus[i].food_items })
                        } else if (menus[i].meal == 'dinner') {
                            this.setState({ pitzerDinner: menus[i].food_items })
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
        var breakfast = ''
        var lunch = ''
        var dinner = ''
        // return the breakfast array for now, I suspect we are going to have to 
        // use a conditional and check the props passed in by each page and see 
        //if what dining hall is and render accordingly 
        //i.e if(this.props.diningHall == 'frary'){
        //     render the frary elements 
        // }

        if (this.props.diningHall == 'frary') {
            breakfast =
                <ul className='list-unstyled'>
                    {this.state.fraryBreakfast.map(menu => <li key={menu.id}>{menu}</li>)}
                </ul>
            lunch =
                <ul className='list-unstyled'>
                    {this.state.fraryLunch.map(menu => <li key={menu.id}>{menu}</li>)}
                </ul>
            dinner =
                <ul className='list-unstyled'>
                    {this.state.fraryDinner.map(menu => <li key={menu.id}>{menu}</li>)}
                </ul>

        }

        if (this.props.diningHall == 'frank') {
            breakfast =
                <ul className='list-unstyled'>
                    {this.state.frankBreakfast.map(menu => <li key={menu.id}>{menu}</li>)}
                </ul>
            lunch =
                <ul className='list-unstyled'>
                    {this.state.frankLunch.map(menu => <li key={menu.id}>{menu}</li>)}
                </ul>
            dinner =
                <ul className='list-unstyled'>
                    {this.state.frankDinner.map(menu => <li key={menu.id}>{menu}</li>)}
                </ul>

        }

        if (this.props.diningHall == 'cmc') {
            breakfast =
                <ul className='list-unstyled'>
                    {this.state.cmcBreakfast.map(menu => <li key={menu.id}>{menu}</li>)}
                </ul>
            lunch =
                <ul className='list-unstyled'>
                    {this.state.cmcLunch.map(menu => <li key={menu.id}>{menu}</li>)}
                </ul>
            dinner =
                <ul className='list-unstyled'>
                    {this.state.cmcDinner.map(menu => <li key={menu.id}>{menu}</li>)}
                </ul>

        }

        if (this.props.diningHall == 'pitzer') {
            breakfast =
                <ul className='list-unstyled'>
                    {this.state.pitzerBreakfast.map(menu => <li key={menu.id}>{menu}</li>)}
                </ul>
            lunch =
                <ul className='list-unstyled'>
                    {this.state.pitzerLunch.map(menu => <li key={menu.id}>{menu}</li>)}
                </ul>
            dinner =
                <ul className='list-unstyled'>
                    {this.state.pitzerDinner.map(menu => <li key={menu.id}>{menu}</li>)}
                </ul>

        }

        if(week_day_parsed == 'sat' || week_day_parsed == 'sun'){
            
        }

        return (
            <div>
                <br />
                <h6>The day and current time is: {this.state.curTime}</h6>
                <br />
                <br />
                <h3>Breakfast</h3>
                {breakfast}
                <br />
                <h3>Lunch</h3>
                {lunch}
                <br />
                <h3>Dinner</h3>
                {dinner}
            </div>



        );
    }



}

export default Menus;