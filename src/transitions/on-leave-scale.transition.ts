import { Animation, PageTransition } from 'ionic-angular';

export class ModalScaleLeaveTransition  extends PageTransition {

    public init() {
        const ele = this.leavingView.pageRef().nativeElement;
        const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
        const contentWrapper = new Animation(this.plt, ele.querySelector('.wrapper'));

        wrapper.beforeStyles({ 'transform': 'scale(1.0)', 'opacity': 1 });
        wrapper.fromTo('transform', 'scale(1.0)', 'scale(0)');
        wrapper.fromTo('opacity', 1, 1);
        contentWrapper.fromTo('opacity', 1, 0);

        this
            .element(this.leavingView.pageRef())
            .duration(500)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(contentWrapper)
            .add(wrapper);
    }
}