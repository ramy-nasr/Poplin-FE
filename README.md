1. **Build the Frontend image**:
   ```bash
   docker build -t pokemon-frontend .
   ```

2. **Run the Frontend container**:
   ```bash
   docker run -d --name pokemon-frontend -p 4200:80 pokemon-frontend
   ```

3. **Access the Frontend**:
   The frontend will be available at:
   ```
   http://localhost:4200
   ```

---

## **5. Stopping and Cleaning Up**

### Stop and Remove Containers
To stop and remove all containers manually:
```bash
docker stop pokemon-backend sqlite-container pokemon-frontend

docker rm pokemon-backend sqlite-container pokemon-frontend
```

### Remove Docker Volume
To remove the Docker volume:
```bash
docker volume rm db_data
```
