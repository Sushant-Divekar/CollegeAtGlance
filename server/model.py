import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestClassifier
import pickle

print("Model training has started...")

# Load the dataset
dataset = pd.read_csv("college.csv")
# Preparing the data
X = dataset.iloc[:, 1:].values
y = dataset.iloc[:, 0].values

classifier = RandomForestClassifier()

classifier.fit(X, y)

with open("college.pkl", "wb") as f:
  pickle.dump(classifier, f)

print("College model has been saved successfully.")

# Load the dataset
dataset = pd.read_csv("marks.csv")
# Preparing the data
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, -1].values

regressor = LinearRegression()

regressor.fit(X, y)

with open("marks.pkl", "wb") as f:
    pickle.dump(regressor, f)

print("Marks model has been saved successfully.")

  