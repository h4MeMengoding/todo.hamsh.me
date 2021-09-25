import React from 'react';
import './Greeting.scss';
import hei from './../../images/hei.svg';

// Store context
import { GlobalConsumer } from '../../store/store';

class Greeting extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         username: this.props.state.username.length ? this.props.state.username : 'Stranger'
      };
      this.username = React.createRef();
      this.introModal = React.createRef();
   }

   saveUsername = () => {
      const username = this.username.current.value;
      if (username !== '') {
         this.setState({
            username: this.username.current.value
         }, this.hideModal)
      }

      this.props.dispatch({type: 'SAVE_USERNAME', username});
   }

   hideModal = () => {
      this.introModal.current.style.display = 'none';
   }

   showModal = () => {
      this.introModal.current.style.display = 'block';
   }

   componentDidMount = () => {
      if (!this.props.state.username.length) {
         this.showModal();
      } else {
         this.hideModal();
      }
   }

   render() {
      return (
         <div className="remind">
            <div className="greeting">
               <h1>Halo, {this.props.state.username}!</h1>
               <h6>{this.props.state.renderedTasks.length ? "Ayo selesaikan tugas kamu!" : "Tidak Ada Tugas Untuk Anda"}</h6>
            </div>
            <div className="intro-modal" ref={this.introModal}>
               <div className="intro-modal-dialog">
                  <div style={{width: '100%'}}>
                     <div className="intro-modal-img">
                        <img src={hei} alt="Hello"/>
                     </div>
                     <div className="intro-modal-header">
                        <h1>Halo, teman👋</h1>
                        <h6>Siapa namamu?</h6>
                     </div>
                     <div className="intro-modal-body">
                        <form>
                           <div className="input-group">
                              <input type="text" id="username" placeholder="Ketikkan disini ya" name="username" autoComplete="off"
                              ref={this.username}/>
                           </div>
                           <div className="input-group">
                              <button type="submit" className="btn btn-primary" id="saveName" name="saveName"
                                 onClick={this.saveUsername}>
                                 Simpan
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default GlobalConsumer(Greeting);