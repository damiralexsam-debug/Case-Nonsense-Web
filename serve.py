"""Serve the extracted standalone game locally. Python 3; no dependencies."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from functools import partial

if __name__ == '__main__':
    root = Path(__file__).resolve().parent
    handler = partial(SimpleHTTPRequestHandler, directory=str(root))
    print('CASE: NONSENSE — open http://127.0.0.1:8000', flush=True)
    print('Keep this window open. Press Ctrl+C to stop.', flush=True)
    try:
        with ThreadingHTTPServer(('127.0.0.1', 8000), handler) as server:
            server.serve_forever()
    except KeyboardInterrupt:
        print('\nStopped.')
    except OSError as error:
        print(f'Could not start the local server: {error}')
