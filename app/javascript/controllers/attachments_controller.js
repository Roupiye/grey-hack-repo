import ApplicationController from './application_controller'
import Trix from 'trix'

export default class extends ApplicationController {
  static targets = ['editor'];

  connect() {
    console.log(this.editorTarget.editor)
  }

  attach(event) {
    const { postId } = event.target.dataset;

    fetch(`/posts/${postId}.json`)
      .then(response => response.json())
      .then(post => this._createAttachment(post))
      .catch(error => {
        console.log('error', error);
      });
  }

  _createAttachment(post) {
    const editor = this.editorTarget.editor;

    const attachment = new Trix.Attachment({
      sgid: post.sgid,
      content: post.content,
    });

    editor.insertAttachment(attachment);
    editor.insertString(' ');
  }
}
