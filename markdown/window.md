### OBJETO WINDOW

> Objeto que representa a janela aberta do browser

#### Algumas Propriedades e métodos

```text
    window.closed
    window.document
    window.document.contentType
    window.document.location
    window.document.readyState
    window.document.URL
    window.confirm('OK!');
    window.navigator
    window.crypto
    window.open('https://google.com')
------------------------------------
    document.defaultView
    window
------------------------------------

```

```html

<div>
    <!-- Abrindo e fechando uma janela -->  
    <button onclick="openNewWindow()">
        Abrir Janela
    </button>

    <button onclick="closeWindow()">
        Fechar
    </button>

    <script>
        let win;
        
        function openNewWindow() {
            win = window.open('https://github.com/felipesantos2', '', 'width=700, height=800')
            console.log(win)
        }

        function closeWindow() {
            win.close()
        }
    </script>
</div>


```