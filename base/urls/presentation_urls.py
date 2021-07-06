from base.views import presentation_views as views
from django.urls import path

urlpatterns = [
    path('getpresentations/', views.getPresentations, name='get-Presentations'),
    path('getpresentation/<str:pk>/', views.getPresentation, name='get-Presentation'),
    path('updatebranch/<str:pk>/', views.updateBranch, name='update-Branch'),
    path('deletepresentation/<str:pk>/', views.deletePresentation, name='delete-Presentation'),
    path('createbranch/', views.createBranch, name='create-Branch'),
]