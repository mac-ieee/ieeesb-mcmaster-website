# ieeesb-mcmaster-website
Website for McMaster


Refer to this: https://microk8s.io/docs/registry-images

To run postgres run the following command in the kubernetes folder:

```bash
microk8s kubectl delete -f=postgres.yaml
```

To test if its up and running (wait a couple seconds) go to the postgres-test folder and run:

```bash
npm run dev
```

You should get 'Hello World!' twice if you've done it correctly.