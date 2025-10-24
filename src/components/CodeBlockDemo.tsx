"use client";

import React from "react";
import { CodeBlock } from "./ui/code-block";

export default function CodeBlockDemo() {
    const code = `import numpy as np
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# Generate synthetic dataset
X, y_true = make_blobs(n_samples=300, centers=4, 
                      cluster_std=0.60, random_state=42)

# Standardize features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Train K-Means clustering model
kmeans = KMeans(n_clusters=4, random_state=42, n_init=10)
cluster_labels = kmeans.fit_predict(X_scaled)

# Evaluate clustering performance
inertia = kmeans.inertia_
centroids = kmeans.cluster_centers_

print(f"Model trained successfully!")
print(f"Number of clusters: {kmeans.n_clusters}")
print(f"Inertia (within-cluster sum of squares): {inertia:.2f}")
print(f"Centroids shape: {centroids.shape}")`;

    return (
        <div className="w-full">
            <CodeBlock
                language="python"
                filename="clustering_model.py"
                highlightLines={[14, 19, 22, 26]}
                code={code}
            />
        </div>
    );
}
