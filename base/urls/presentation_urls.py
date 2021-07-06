from base.views import presentation_views as views
from django.urls import path

urlpatterns = [
    path('createpresentation/', views.createPresentation, name='create-Presentation'),
    path('getpresentations/', views.getPresentations, name='get-Presentations'),
    path('getpresentation/<str:pk>/', views.getPresentation, name='get-Presentation'),
    path('updatepresntation/<str:pk>/', views.updatePresentation, name='update-Presentation'),
    path('deletepresentation/<str:pk>/', views.deletePresentation, name='delete-Presentation'),
]