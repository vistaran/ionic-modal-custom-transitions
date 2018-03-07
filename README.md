# ionic-modal-custom-transitions
Adding Custom Transitions to Ionic Modals

![Ionic – Adding Custom Transitions to Modals](https://www.vistaran.tech/blog/wp-content/uploads/2018/03/Ionic-Angular5-modal-transitions.png "Ionic - Adding Custom Transitions to Modals")

![Demo](https://www.vistaran.tech/blog/wp-content/uploads/2018/03/custom-modal-transitions.gif)

### Transitions and Usage

All transitions classes are located under `transitions` folder. These are the available Transition classes:

- `modal-translate-up-enter`
- `modal-translate-up-leave`
- `modal-scale-up-enter`
- `modal-scale-up-leave`

You can use existing transition classes like this when you create a modal:

````javascript
var modal = this.modalCtrl.create(SampleModalPage, {}, {
  enterAnimation: '<ENTER TRANSITION CLASS NAME>',
  leaveAnimation: '<LEAVE TRANSITION CLASS NAME>'
});
````


Find complete details on how to use it in our blog article on how to use it here: [Ionic Modal Custom Transitions](https://www.vistaran.tech/blog/ionic-modals-custom-transitions/).
