import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
// import Services from './components/services';
// import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import Stats from './components/stats';
import StatsData from './data/stat.json';
import Reach from './components/reach';
import Clients from './components/clients';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import BlogPosts from './components/blogs';
import SinglePost from "./components/singlepost";
// 404 page
import NotFoundPage from './components/NotFoundPage.jsx';

export class App extends Component {

  render() {
    return (
      <main>
        <Router>
        <Navigation />
          <Switch>
              <Route path="/" component ={Home} exact />
              <Route path="/blog" exact component = {BlogPosts} />
              <Route path="/blog/:slug" component = {SinglePost} />
              <Route path="/404" component={NotFoundPage} />
              <Redirect to="/404" />
          </Switch>
        </Router>
      </main>
    )
  }
}

class Home extends Component{

  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({
      landingPageData : JsonData,
      statData: StatsData
    })
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render (){
    return (
      <div>
        <Header data={this.state.landingPageData.Header} />
        <Stats />
        <Features data={this.state.landingPageData.Features} />
        <About data={this.state.landingPageData.About} />
        <Reach data={this.state.landingPageData.Reaches} />
        <Clients data=
        {this.state.landingPageData.Clients} />
        <Testimonials data={this.state.landingPageData.Testimonials} />
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
  );
  }
}


export default App;
