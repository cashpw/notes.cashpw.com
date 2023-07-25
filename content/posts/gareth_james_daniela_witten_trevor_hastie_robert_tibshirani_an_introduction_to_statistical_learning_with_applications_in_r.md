+++
title = "Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani | An Introduction to Statistical Learning: With Applications in R"
author = ["Cash Weaver"]
date = 2022-12-24T09:19:00-08:00
lastmod = 2023-07-25T10:42:12-07:00
tags = ["has-todo", "reference", "has-todo", "reference"]
categories = ["has-todo", "reference"]
draft = false
slug = "94bcb9cb-d5b8-49d7-a169-891808910a65"
+++

[Gareth James]({{< relref "gareth_james.md" >}}), [Daniela Witten]({{< relref "daniela_witten.md" >}}), [Trevor Hastie]({{< relref "trevor_hastie.md" >}}), [Robert Tibshirani]({{< relref "robert_tibshirani.md" >}}), (<a href="#citeproc_bib_item_1">James et al. 2013</a>)


## Summary {#summary}


## Thoughts {#thoughts}


## Notes {#notes}


### Skeleton {#skeleton}


#### Preface {#preface}


#### Contents {#contents}


#### 1 Introduction {#1-introduction}


#### 2 Statistical Learning {#2-statistical-learning}

<!--list-separator-->

-  2.1 What Is Statistical Learning?

    <!--list-separator-->

    -  2.1.1 Why Estimate f?

    <!--list-separator-->

    -  2.1.2 How Do We Estimate f?

    <!--list-separator-->

    -  2.1.3 The Trade-Off Between Prediction Accuracy and Model Interpretability

    <!--list-separator-->

    -  2.1.4 Supervised Versus Unsupervised Learning

    <!--list-separator-->

    -  2.1.5 Regression Versus Classification Problems

<!--list-separator-->

-  2.2 Assessing Model Accuracy

    <!--list-separator-->

    -  2.2.1 Measuring the Quality of Fit

    <!--list-separator-->

    -  2.2.2 The Bias-Variance Trade-Off

    <!--list-separator-->

    -  2.2.3 The Classification Setting

<!--list-separator-->

-  2.3 Lab: Introduction to R

    <!--list-separator-->

    -  2.3.1 Basic Commands

    <!--list-separator-->

    -  2.3.2 Graphics

    <!--list-separator-->

    -  2.3.3 Indexing Data

    <!--list-separator-->

    -  2.3.4 Loading Data

    <!--list-separator-->

    -  2.3.5 Additional Graphical and Numerical Summaries

<!--list-separator-->

-  2.4 Exercises


#### 3 Linear Regression {#3-linear-regression}

<!--list-separator-->

-  3.1 Simple Linear Regression

    <!--list-separator-->

    -  3.1.1 Estimating the Coefficients

    <!--list-separator-->

    -  3.1.2 Assessing the Accuracy of the Coefficients Estimates

    <!--list-separator-->

    -  3.1.3 Assessing the Accuracy of the Model

<!--list-separator-->

-  3.2 Multiple Linear Regression

    <!--list-separator-->

    -  3.2.1 Estimating the Regression Coefficients

    <!--list-separator-->

    -  3.2.2 Some Important Questions

<!--list-separator-->

-  3.3 Other Considerations in the Regression Model

    <!--list-separator-->

    -  3.3.1 Qualitative Predictors

    <!--list-separator-->

    -  3.3.2 Extensions of the Linear Model

    <!--list-separator-->

    -  3.3.3 Potential Problems

<!--list-separator-->

-  3.4 The Marketing Plan

<!--list-separator-->

-  3.5 Comparison of Linear Regression with K-Nearest Neighbors

<!--list-separator-->

-  3.6 Lab: Linear Regression

    <!--list-separator-->

    -  3.6.1 Libraries

    <!--list-separator-->

    -  3.6.2 Simple Linear Regression

    <!--list-separator-->

    -  3.6.3 Multiple Linear Regression

    <!--list-separator-->

    -  3.6.4 Interaction Terms

    <!--list-separator-->

    -  3.6.5 Non-linear Transformations of the Predictors

    <!--list-separator-->

    -  3.6.6 Qualitative Predictors

    <!--list-separator-->

    -  3.6.7 Writing Functions

<!--list-separator-->

-  3.7 Exercises


#### 4 Classification {#4-classification}

<!--list-separator-->

-  4.1 An Overview of Classification

<!--list-separator-->

-  4.2 Why Not Linear Regression?

<!--list-separator-->

-  4.3 Logistic Regression

    <!--list-separator-->

    -  4.3.1 The Logistic Model

    <!--list-separator-->

    -  4.3.2 Estimating the Regression Coefficients

    <!--list-separator-->

    -  4.3.3 Making Predictions

    <!--list-separator-->

    -  4.3.4 Multiple Logistic Regression

    <!--list-separator-->

    -  4.3.5 Multinomial Logistic Regression

<!--list-separator-->

-  4.4 Generative Models for Classification

    <!--list-separator-->

    -  4.4.1 Linear Discriminant Analysis for p = 1

    <!--list-separator-->

    -  4.4.2 Linear Discriminant Analysis for p &gt;1

    <!--list-separator-->

    -  4.4.3 Quadratic Discriminant Analysis

    <!--list-separator-->

    -  4.4.4 Naive Bayes

<!--list-separator-->

-  4.5 A Comparison of Classification Methods

    <!--list-separator-->

    -  4.5.1 An Analytical Comparison

    <!--list-separator-->

    -  4.5.2 An Empirical Comparison

<!--list-separator-->

-  4.6 Generalized Linear Models

    <!--list-separator-->

    -  4.6.1 Linear Regression on the Bikeshare Data

    <!--list-separator-->

    -  4.6.2 Poisson Regression on the Bikeshare Data

    <!--list-separator-->

    -  4.6.3 Generalized Linear Models in Greater Generality

<!--list-separator-->

-  4.7 Lab: Classification Methods

    <!--list-separator-->

    -  4.7.1 The Stock Market Data

    <!--list-separator-->

    -  4.7.2 Logistic Regression

    <!--list-separator-->

    -  4.7.3 Linear Discriminant Analysis

    <!--list-separator-->

    -  4.7.4 Quadratic Discriminant Analysis

    <!--list-separator-->

    -  4.7.5 Naive Bayes

    <!--list-separator-->

    -  4.7.6 K-Nearest Neighbors

    <!--list-separator-->

    -  4.7.7 Poisson Regression

<!--list-separator-->

-  4.8 Exercises


#### 5 Resampling Methods {#5-resampling-methods}

<!--list-separator-->

-  5.1 Cross-Validation

    <!--list-separator-->

    -  5.1.1 The Validation Set Approach

    <!--list-separator-->

    -  5.1.2 Leave-One-Out Cross-Validation

    <!--list-separator-->

    -  5.1.3 k-Fold Cross-Validation

    <!--list-separator-->

    -  5.1.4 Bias-Variance Trade-Off for k-Fold Cross-Validation

    <!--list-separator-->

    -  5.1.5 Cross-Validation on Classification Problems

<!--list-separator-->

-  5.2 The Bootstrap

<!--list-separator-->

-  5.3 Lab: Cross-Validation and the Bootstrap

    <!--list-separator-->

    -  5.3.1 The Validation Set Approach

    <!--list-separator-->

    -  5.3.2 Leave-One-Out Cross-Validation

    <!--list-separator-->

    -  5.3.3 k-Fold Cross-Validation

    <!--list-separator-->

    -  5.3.4 The Bootstrap

<!--list-separator-->

-  5.4 Exercises


#### 6 Linear Model Selection and Regularization {#6-linear-model-selection-and-regularization}

<!--list-separator-->

-  6.1 Subset Selection

    <!--list-separator-->

    -  6.1.1 Best Subset Selection

    <!--list-separator-->

    -  6.1.2 Stepwise Selection

    <!--list-separator-->

    -  6.1.3 Choosing the Optimal Model

<!--list-separator-->

-  6.2 Shrinkage Methods

    <!--list-separator-->

    -  6.2.1 Ridge Regression

    <!--list-separator-->

    -  6.2.2 The Lasso

    <!--list-separator-->

    -  6.2.3 Selecting the Tuning Parameter

<!--list-separator-->

-  6.3 Dimension Reduction Methods

    <!--list-separator-->

    -  6.3.1 Principal Components Regression

    <!--list-separator-->

    -  6.3.2 Partial Least Squares

<!--list-separator-->

-  6.4 Considerations in High Dimensions

    <!--list-separator-->

    -  6.4.1 High-Dimensional Data

    <!--list-separator-->

    -  6.4.2 What Goes Wrong in High Dimensions?

    <!--list-separator-->

    -  6.4.3 Regression in High Dimensions

    <!--list-separator-->

    -  6.4.4 Interpreting Results in High Dimensions

<!--list-separator-->

-  6.5 Lab: Linear Models and Regularization Methods

    <!--list-separator-->

    -  6.5.1 Subset Selection Methods

    <!--list-separator-->

    -  6.5.2 Ridge Regression and the Lasso

    <!--list-separator-->

    -  6.5.3 PCR and PLS Regression

<!--list-separator-->

-  6.6 Exercises


#### 7 Moving Beyond Linearity {#7-moving-beyond-linearity}

<!--list-separator-->

-  7.1 Polynomial Regression

<!--list-separator-->

-  7.2 Step Functions

<!--list-separator-->

-  7.3 Basis Functions

<!--list-separator-->

-  7.4 Regression Splines

    <!--list-separator-->

    -  7.4.1 Piecewise Polynomials

    <!--list-separator-->

    -  7.4.2 Constraints and Splines

    <!--list-separator-->

    -  7.4.3 The Spline Basis Representation

    <!--list-separator-->

    -  7.4.4 Choosing the Number and Locations of the Knots

    <!--list-separator-->

    -  7.4.5 Comparison to Polynomial Regression

<!--list-separator-->

-  7.5 Smoothing Splines

    <!--list-separator-->

    -  7.5.1 An Overview of Smoothing Splines

    <!--list-separator-->

    -  7.5.2 Choosing the Smoothing Parameter λ

<!--list-separator-->

-  7.6 Local Regression

<!--list-separator-->

-  7.7 Generalized Additive Models

    <!--list-separator-->

    -  7.7.1 GAMs for Regression Problems

    <!--list-separator-->

    -  7.7.2 GAMs for Classification Problems

<!--list-separator-->

-  7.8 Lab: Non-linear Modeling

    <!--list-separator-->

    -  7.8.1 Polynomial Regression and Step Functions

    <!--list-separator-->

    -  7.8.2 Splines

    <!--list-separator-->

    -  7.8.3 GAMs

<!--list-separator-->

-  7.9 Exercises


#### 8 Tree-Based Methods {#8-tree-based-methods}

<!--list-separator-->

-  8.1 The Basics of Decision Trees

    <!--list-separator-->

    -  8.1.1 Regression Trees

    <!--list-separator-->

    -  8.1.2 Classification Trees

    <!--list-separator-->

    -  8.1.3 Trees Versus Linear Models

    <!--list-separator-->

    -  8.1.4 Advantages and Disadvantages of Trees

<!--list-separator-->

-  8.2 Bagging, Random Forests, Boosting, and Bayesian Additive Regression Trees

    <!--list-separator-->

    -  8.2.1 Bagging

    <!--list-separator-->

    -  8.2.2 Random Forests

    <!--list-separator-->

    -  8.2.3 Boosting

    <!--list-separator-->

    -  8.2.4 Bayesian Additive Regression Trees

    <!--list-separator-->

    -  8.2.5 Summary of Tree Ensemble Methods

<!--list-separator-->

-  8.3 Lab: Decision Trees

    <!--list-separator-->

    -  8.3.1 Fitting Classification Trees

    <!--list-separator-->

    -  8.3.2 Fitting Regression Trees

    <!--list-separator-->

    -  8.3.3 Bagging and Random Forests

    <!--list-separator-->

    -  8.3.4 Boosting

    <!--list-separator-->

    -  8.3.5 Bayesian Additive Regression Trees

<!--list-separator-->

-  8.4 Exercises


#### 9 Support Vector Machines {#9-support-vector-machines}

<!--list-separator-->

-  9.1 Maximal Margin Classifier

    <!--list-separator-->

    -  9.1.1 What Is a Hyperplane?

    <!--list-separator-->

    -  9.1.2 Classification Using a Separating Hyperplane

    <!--list-separator-->

    -  9.1.3 The Maximal Margin Classifier

    <!--list-separator-->

    -  9.1.4 Construction of the Maximal Margin Classifier

    <!--list-separator-->

    -  9.1.5 The Non-separable Case

<!--list-separator-->

-  9.2 Support Vector Classifiers

    <!--list-separator-->

    -  9.2.1 Overview of the Support Vector Classifier

    <!--list-separator-->

    -  9.2.2 Details of the Support Vector Classifier

<!--list-separator-->

-  9.3 Support Vector Machines

    <!--list-separator-->

    -  9.3.1 Classification with Non-Linear Decision Boundaries

    <!--list-separator-->

    -  9.3.2 The Support Vector Machine

    <!--list-separator-->

    -  9.3.3 An Application to the Heart Disease Data

<!--list-separator-->

-  9.4 SVMs with More than Two Classes

    <!--list-separator-->

    -  9.4.1 One-Versus-One Classification

    <!--list-separator-->

    -  9.4.2 One-Versus-All Classification

<!--list-separator-->

-  9.5 Relationship to Logistic Regression

<!--list-separator-->

-  9.6 Lab: Support Vector Machines

    <!--list-separator-->

    -  9.6.1 Support Vector Classifier

    <!--list-separator-->

    -  9.6.2 Support Vector Machine

    <!--list-separator-->

    -  9.6.3 ROC Curves

    <!--list-separator-->

    -  9.6.4 SVM with Multiple Classes

    <!--list-separator-->

    -  9.6.5 Application to Gene Expression Data

<!--list-separator-->

-  9.7 Exercises


#### 10 Deep Learning {#10-deep-learning}

<!--list-separator-->

-  10.1 Single Layer Neural Networks

<!--list-separator-->

-  10.2 Multilayer Neural Networks

<!--list-separator-->

-  10.3 Convolutional Neural Networks

    <!--list-separator-->

    -  10.3.1 Convolution Layers

    <!--list-separator-->

    -  10.3.2 Pooling Layers

    <!--list-separator-->

    -  10.3.3 Architecture of a Convolutional Neural Network

    <!--list-separator-->

    -  10.3.4 Data Augmentation

    <!--list-separator-->

    -  10.3.5 Results Using a Pretrained Classifier

<!--list-separator-->

-  10.4 Document Classification

<!--list-separator-->

-  10.5 Recurrent Neural Networks

    <!--list-separator-->

    -  10.5.1 Sequential Models for Document Classification

    <!--list-separator-->

    -  10.5.2 Time Series Forecasting

    <!--list-separator-->

    -  10.5.3 Summary of RNNs

<!--list-separator-->

-  10.6 When to Use Deep Learning

<!--list-separator-->

-  10.7 Fitting a Neural Network

    <!--list-separator-->

    -  10.7.1 Backpropagation

    <!--list-separator-->

    -  10.7.2 Regularization and Stochastic Gradient Descent

    <!--list-separator-->

    -  10.7.3 Dropout Learning

    <!--list-separator-->

    -  10.7.4 Network Tuning

<!--list-separator-->

-  10.8 Interpolation and Double Descent

<!--list-separator-->

-  10.9 Lab: Deep Learning

    <!--list-separator-->

    -  10.9.1 A Single Layer Network on the Hitters Data

    <!--list-separator-->

    -  10.9.2 A Multilayer Network on the MNIST Digit Data

    <!--list-separator-->

    -  10.9.3 Convolutional Neural Networks

    <!--list-separator-->

    -  10.9.4 Using Pretrained CNN Models

    <!--list-separator-->

    -  10.9.5 IMDb Document Classification

    <!--list-separator-->

    -  10.9.6 Recurrent Neural Networks

<!--list-separator-->

-  10.10 Exercises


#### 11 Survival Analysis and Censored Data {#11-survival-analysis-and-censored-data}

<!--list-separator-->

-  11.1 Survival and Censoring Times

<!--list-separator-->

-  11.2 A Closer Look at Censoring

<!--list-separator-->

-  11.3 The Kaplan-Meier Survival Curve

<!--list-separator-->

-  11.4 The Log-Rank Test

<!--list-separator-->

-  11.5 Regression Models With a Survival Response

    <!--list-separator-->

    -  11.5.1 The Hazard Function

    <!--list-separator-->

    -  11.5.2 Proportional Hazards

    <!--list-separator-->

    -  11.5.3 Example: Brain Cancer Data

    <!--list-separator-->

    -  11.5.4 Example: Publication Data

<!--list-separator-->

-  11.6 Shrinkage for the Cox Model

<!--list-separator-->

-  11.7 Additional Topics

    <!--list-separator-->

    -  11.7.1 Area Under the Curve for Survival Analysis

    <!--list-separator-->

    -  11.7.2 Choice of Time Scale

    <!--list-separator-->

    -  11.7.3 Time-Dependent Covariates

    <!--list-separator-->

    -  11.7.4 Checking the Proportional Hazards Assumption

    <!--list-separator-->

    -  11.7.5 Survival Trees

<!--list-separator-->

-  11.8 Lab: Survival Analysis

    <!--list-separator-->

    -  11.8.1 Brain Cancer Data

    <!--list-separator-->

    -  11.8.2 Publication Data

    <!--list-separator-->

    -  11.8.3 Call Center Data

<!--list-separator-->

-  11.9 Exercises


#### 12 Unsupervised Learning {#12-unsupervised-learning}

<!--list-separator-->

-  12.1 The Challenge of Unsupervised Learning

<!--list-separator-->

-  12.2 Principal Components Analysis

    <!--list-separator-->

    -  12.2.1 What Are Principal Components?

    <!--list-separator-->

    -  12.2.2 Another Interpretation of Principal Components

    <!--list-separator-->

    -  12.2.3 The Proportion of Variance Explained

    <!--list-separator-->

    -  12.2.4 More on PCA

    <!--list-separator-->

    -  12.2.5 Other Uses for Principal Components

<!--list-separator-->

-  12.3 Missing Values and Matrix Completion

<!--list-separator-->

-  12.4 Clustering Methods

    <!--list-separator-->

    -  12.4.1 K-Means Clustering

    <!--list-separator-->

    -  12.4.2 Hierarchical Clustering

    <!--list-separator-->

    -  12.4.3 Practical Issues in Clustering

<!--list-separator-->

-  12.5 Lab: Unsupervised Learning

    <!--list-separator-->

    -  12.5.1 Principal Components Analysis

    <!--list-separator-->

    -  12.5.2 Matrix Completion

    <!--list-separator-->

    -  12.5.3 Clustering

    <!--list-separator-->

    -  12.5.4 NCI60 Data Example

<!--list-separator-->

-  12.6 Exercises


#### 13 Multiple Testing {#13-multiple-testing}

<!--list-separator-->

-  13.1 A Quick Review of Hypothesis Testing

    <!--list-separator-->

    -  13.1.1 Testing a Hypothesis

    <!--list-separator-->

    -  13.1.2 Type I and Type II Errors

<!--list-separator-->

-  13.2 The Challenge of Multiple Testing

<!--list-separator-->

-  13.3 The Family-Wise Error Rate

    <!--list-separator-->

    -  13.3.1 What is the Family-Wise Error Rate?

    <!--list-separator-->

    -  13.3.2 Approaches to Control the Family-Wise Error Rate

    <!--list-separator-->

    -  13.3.3 Trade-Off Between the FWER and Power

<!--list-separator-->

-  13.4 The False Discovery Rate

    <!--list-separator-->

    -  13.4.1 Intuition for the False Discovery Rate

    <!--list-separator-->

    -  13.4.2 The Benjamini-Hochberg Procedure

<!--list-separator-->

-  13.5 A Re-Sampling Approach to p-Values and False Discovery Rates

    <!--list-separator-->

    -  13.5.1 A Re-Sampling Approach to the p-Value

    <!--list-separator-->

    -  13.5.2 A Re-Sampling Approach to the False Discovery Rate

    <!--list-separator-->

    -  13.5.3 When Are Re-Sampling Approaches Useful?

<!--list-separator-->

-  13.6 Lab: Multiple Testing

    <!--list-separator-->

    -  13.6.1 Review of Hypothesis Tests

    <!--list-separator-->

    -  13.6.2 The Family-Wise Error Rate

    <!--list-separator-->

    -  13.6.3 The False Discovery Rate

    <!--list-separator-->

    -  13.6.4 A Re-Sampling Approach

<!--list-separator-->

-  13.7 Exercises


#### Index {#index}


## Flashcards {#flashcards}


### Source {#source}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| front    | 2.65 | 13  | 377.11   | 2024-03-30T20:39:07Z |

[An Introduction to Statistical Learning: With Applications in R]({{< relref "gareth_james_daniela_witten_trevor_hastie_robert_tibshirani_an_introduction_to_statistical_learning_with_applications_in_r.md" >}})


#### Back {#back}

1.  [Gareth James]({{< relref "gareth_james.md" >}})
2.  [Daniela Witten]({{< relref "daniela_witten.md" >}})
3.  [Trevor Hastie]({{< relref "trevor_hastie.md" >}})
4.  [Robert Tibshirani]({{< relref "robert_tibshirani.md" >}})


### AKA {#aka}

| position | ease | box | interval | due                  |
|----------|------|-----|----------|----------------------|
| 0        | 2.65 | 9   | 415.17   | 2024-05-12T22:01:21Z |
| 1        | 2.80 | 11  | 330.77   | 2023-12-13T20:30:23Z |

-   {{Introduction to Statistical Learning with Applications in R}@0}
-   {{ISLR}@1}

## References

<style>.csl-entry{text-indent: -1.5em; margin-left: 1.5em;}</style><div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>James, Gareth, Daniela Witten, Trevor Hastie, and Robert Tibshirani, eds. 2013. <i>An Introduction to Statistical Learning: With Applications in R</i>. Springer Texts in Statistics 103. New York: Springer.</div>
</div>


## Backlinks {#backlinks}

-   [Robert Tibshirani]({{< relref "robert_tibshirani.md" >}})
-   [Trevor Hastie]({{< relref "trevor_hastie.md" >}})
-   [Daniela Witten]({{< relref "daniela_witten.md" >}})
-   [Gareth James]({{< relref "gareth_james.md" >}})
