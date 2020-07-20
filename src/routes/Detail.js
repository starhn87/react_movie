import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        console.log(this.props);
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        console.log(this.props);
        const {location} = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
    }
}

export default Detail;