from base.views.reviews_views import getReviews
from django.urls import path
from base.views import product_views as views
urlpatterns = [
     path('getreviews/',views.getReviews, name='get-Reviews'),
     path('createreview/',views.createReview, name='create-Review'),
     path('getreview/<str:pk>/',views.getReview, name='get-Review'),
     path('updatereview/<str:pk>/',views.updateReview, name='update-Review'),
     path('deletereview/<str:pk>/',views.deleteReview, name='delete-Review'),
]