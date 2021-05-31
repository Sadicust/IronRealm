        const aud_sky = document.getElementById("audio-sky");
        const aud_lurking = document.getElementById("audio-lurking");
        const aud_watching = document.getElementById("audio-watching");
        const aud_discover = document.getElementById("audio-discover");
        var count_silencio = 0;
        function mute() { 
            if (count_silencio == 0){
                count_silencio = 1;
                aud_sky.muted = true;
                aud_lurking.muted = true;
                aud_watching.muted = true;
                aud_discover.muted = true;
                
            }else{
                count_silencio = 0;
                aud_sky.muted = false;
                aud_lurking.muted = false;
                aud_watching.muted = false;
                aud_discover.muted = false;
            }
        }
        const audio_sky = document.getElementById('audio-sky');
        const audio_lurking = document.getElementById('audio-lurking');
        const audio_watching = document.getElementById('audio-watching');
        const audio_discover = document.getElementById('audio-discover');
        var count_sky = 0;
        var count_lurking = 0;
        var count_watching = 0;
        var count_discover = 0;
        function sky(){
            if(count_sky == 0){
                count_sky = 1;
                audio_sky.play();
                audio_lurking.pause();
                audio_lurking.currentTime = 0;
                audio_watching.pause();
                audio_watching.currentTime = 0;
                audio_discover.pause();
                audio_discover.currentTime = 0;
            }else{
                count_sky = 0;
                audio_sky.pause();
                audio_sky.currentTime = 0;
            }
        }
        function lurking(){
            if(count_lurking == 0){
                count_lurking = 1;
                audio_lurking.play();
                audio_sky.pause();
                audio_sky.currentTime = 0;
                audio_watching.pause();
                audio_watching.currentTime = 0;
                audio_discover.pause();
                audio_discover.currentTime = 0;
            }else{
                count_lurking = 0;
                audio_lurking.pause();
                audio_lurking.currentTime = 0;
            }
        }
        function watching(){
            if(count_watching == 0){
                count_watching = 1;
                audio_watching.play();
                audio_sky.pause();
                audio_sky.currentTime = 0;
                audio_lurking.pause();
                audio_lurking.currentTime = 0;
                audio_discover.pause();
                audio_discover.currentTime = 0;
            }else{
                count_watching = 0;
                audio_watching.pause();
                audio_watching.currentTime = 0;
            }
        }
        function discover(){
            if(count_discover == 0){
                count_discover = 1;
                audio_discover.play();
                audio_sky.pause();
                audio_sky.currentTime = 0;
                audio_lurking.pause();
                audio_lurking.currentTime = 0;
                audio_watching.pause();
                audio_watching.currentTime = 0;
            }else{
                count_discover = 0;
                audio_discover.pause();
                audio_discover.currentTime = 0;
            }
        }
        addEventListener('DOMContentLoaded',function(){
            var btn = document.querySelector(".btn-aud");
            var altavoz = document.querySelector("#altavoz");
            btn.addEventListener('click',function(){
                altavoz.classList.toggle('fa-volume-up');
                altavoz.classList.toggle('fa-volume-off');
            })
        })
        addEventListener('DOMContentLoaded',function(){
            var btndark = document.querySelector(".btn-dark");
            var dark = document.querySelector("#dark");
            var body = document.querySelector("#body");
            btndark.addEventListener('click',function(){
                dark.classList.toggle('fa-moon-o');
                dark.classList.toggle('fa-sun-o');
                body.classList.toggle("dark-theme");
            })
        })
        addEventListener('DOMContentLoaded', () => {
			const car = document.querySelector('#nochefria');
			if(car){car.addEventListener('click', () => {
                const b =document.querySelector('#nochefria');
                const vinyl = document.querySelector('.vinyl-noche');
                const span = document.querySelector('.vinyl-noche-span');
                const vinyl_light = document.querySelector('.vinyl-noche-light');
                const lista = document.querySelector('.lista-noche');
                const color = document.querySelector('.noche');
                const compra = document.querySelector('.ver-noche');
                const ttlnoche = document.querySelector('.ttl-noche');
                b.classList.toggle('b-activo');
                vinyl.classList.toggle('animacion-disco');
                span.classList.toggle('movimiento-disco');
                vinyl_light.classList.toggle('movimiento-disco');
                lista.classList.toggle('lista-activa');
                color.classList.toggle('color');
                compra.classList.toggle('ver-activo');
                ttlnoche.classList.toggle('ttl-activo');
                })
			}
        })
        addEventListener('DOMContentLoaded', () => {
			const car = document.querySelector('#thebeast');
			if(car){car.addEventListener('click', () => {
                const b =document.querySelector('#thebeast');
                const vinyl = document.querySelector('.vinyl-kraken');
                const span = document.querySelector('.vinyl-kraken-span');
                const vinyl_light = document.querySelector('.vinyl-kraken-light');
                const lista = document.querySelector('.lista-kraken');
                const color = document.querySelector('.kraken');
                const compra = document.querySelector('.ver-kraken');
                const ttlkraken = document.querySelector('.ttl-kraken');
                b.classList.toggle('b-activo');
                vinyl.classList.toggle('animacion-disco');
                span.classList.toggle('movimiento-disco');
                vinyl_light.classList.toggle('movimiento-disco');
                lista.classList.toggle('lista-activa');
                color.classList.toggle('color');
                compra.classList.toggle('ver-activo');
                ttlkraken.classList.toggle('ttl-activo');
                })
			}
        })
        addEventListener('DOMContentLoaded', () => {
			const car = document.querySelector('#gargantuan')
			if(car){car.addEventListener('click', () => {
                const b =document.querySelector('#gargantuan')
                const vinyl = document.querySelector('.vinyl-coloso')
                const span = document.querySelector('.vinyl-coloso-span')
                const vinyl_light = document.querySelector('.vinyl-coloso-light')
                const lista = document.querySelector('.lista-coloso')
                const color = document.querySelector('.coloso')
                const compra = document.querySelector('.ver-coloso')
                const ttlcoloso = document.querySelector('.ttl-coloso')
                b.classList.toggle('b-activo')
                vinyl.classList.toggle('animacion-disco')
                span.classList.toggle('movimiento-disco')
                vinyl_light.classList.toggle('movimiento-disco')
                lista.classList.toggle('lista-activa')
                color.classList.toggle('color')
                compra.classList.toggle('ver-activo')
                ttlcoloso.classList.toggle('ttl-activo')
                })
			}
        })
        addEventListener('DOMContentLoaded', () => {
			const car = document.querySelector('#eldorado')
			if(car){car.addEventListener('click', () => {
                const b =document.querySelector('#eldorado')
                const vinyl = document.querySelector('.vinyl-dorado')
                const span = document.querySelector('.vinyl-dorado-span')
                const vinyl_light = document.querySelector('.vinyl-dorado-light')
                const lista = document.querySelector('.lista-dorado')
                const color = document.querySelector('.dorado')
                const compra = document.querySelector('.ver-dorado')
                const ttldorado = document.querySelector('.ttl-dorado')
                b.classList.toggle('b-activo')
                vinyl.classList.toggle('animacion-disco')
                span.classList.toggle('movimiento-disco')
                vinyl_light.classList.toggle('movimiento-disco')
                lista.classList.toggle('lista-activa')
                color.classList.toggle('color')
                compra.classList.toggle('ver-activo')
                ttldorado.classList.toggle('ttl-activo')
                })
			}
        })