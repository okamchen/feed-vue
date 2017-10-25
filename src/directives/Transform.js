import Vue from 'vue';

Vue.directive('meu-transform', {

    bind(el, binding, vnode) {

        let current = 0;
        let control = true;
        let incrementDefault = 1;

        el.addEventListener('dblclick', function () {
            
            let increment = binding.value || incrementDefault;
            let efect;
                
            if(binding.arg == 'scale'){
                let controlIncrement = control ? increment : incrementDefault;
                efect=`scale(${controlIncrement})`;
                control = !control;
            }
            
            el.style.transition = 'transform 0.5s';
            el.style.overflow = 'hidden';

            this.style.transform = efect;
        });
    }
});