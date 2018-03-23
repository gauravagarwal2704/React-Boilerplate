import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import { withStyles } from "material-ui/styles";
import MenuIcon from "material-ui-icons/Menu";
import List from "material-ui/List";
import Divider from "material-ui/Divider";
import PropTypes from "prop-types";
import { Route, Link } from "react-router-dom";
import Home from "../Home";
import About from "../About";

const styles = {
	list: {
		width: 250
	}
};

class Header extends Component {
	state = {
		left: false
	};

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<div>
				<AppBar
					position="static"
					color="default"
					onClick={this.toggleDrawer("left", true)}
				/>
				<Drawer
					open={this.state.left}
					onClose={this.toggleDrawer("left", false)}
				>
					<div
						tabIndex={0}
						role="button"
						onClick={this.toggleDrawer("left", false)}
						onKeyDown={this.toggleDrawer("left", false)}
					>
						<div>
							<List>
								<Link to="/">Home</Link>
							</List>
							<Divider />
							<List>
								<Link to="/about-us">About</Link>
							</List>
						</div>
					</div>
				</Drawer>
			</div>
		);
	}
}
Header.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);