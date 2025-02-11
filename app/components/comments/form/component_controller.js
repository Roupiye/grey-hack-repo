import ApplicationController from '../../../javascript/controllers/application_controller'

export default class extends ApplicationController {
  static targets = ['input', 'form', 'respondId']

  connect() {
    super.connect()
  }

  create(event) {
    event.preventDefault()
    this.stimulate(
      'Comments::Form::ComponentReflex#create', event.target
    )
    event.target.disabled = true
  }

  update(event) {
    event.preventDefault()
    this.stimulate(
      'Comments::Form::ComponentReflex#update', event.target
    )
    event.target.disabled = true
  }

  cancel_edit() {
    event.preventDefault()
    this.stimulate(
      'Comments::Form::ComponentReflex#cancel_edit', event.target
    )
    event.target.disabled = true
  }

  createSuccess(element, reflex, noop, reflexId) {
    var error_hint = this.formTarget.querySelector('.error')
    if(error_hint == null) {
      this.inputTarget.value = ""
    }
  }
}
