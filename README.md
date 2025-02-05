# ieeesb-mcmaster-website
Website for McMaster

## Test Project Locally
Run:
```bash
docker compose up
```

## Simulate Production Environment
To simulate the production environment locally (note this requires kubernetes installed as well as a kubernetes service provider)
You need to do the following steps
1. Create a Github PAT token (project settings, under development settings, tokens, create classic token, read:package permission only enabled)
2. Run the following kubernetes commands in the root of the project (ensure that both loadbalancing and storage is enabled on microk8s if using that)

```bash
kubectl create secret docker-registry ghcr-secret \
  --docker-server=ghcr.io \
  --docker-username=${Github user name} \
  --docker-password=${Github personal access token} \
  --docker-email=${Github email}
kubectl apply -f=postgres.dev.volumes.yaml -f=postgres.dev.yaml -f=webapp.yaml
```

If the image has changed due to someone merging branches with main, Run the following:

```bash
kubectl delete -f=webapp.yaml
kubectl apply -f=webapp.yaml
```

If you want to clean postgres as well then
```bash
kubectl delete -f=postgres.dev.yaml
kubectl apply -f=postgres.dev.yaml
```

## Production

### Setup Kubernetes Environment on production

To setup the environment on production, run the following command in the machine. For now, we are not using persistent volumes and pvcs for production since I had trouble setting it up and syncing it, but that is something I'll look into when the PI's are online again.

```bash
kubectl apply -f=postgres.yaml -f=webapp.yaml
```

### When a feature has been added to main (via merging)

Since all builds are automated on the main branch with Github Actions, it will generate a docker image in Github Packages. Everytime this occurs, you would need to SSH into the PIs and perform the following commands:
```bash
kubectl delete -f=webapp.yaml
kubectl apply -f=webapp.yaml
```